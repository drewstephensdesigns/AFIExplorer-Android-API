import { ROUTES, CRON_INTERVAL_MIN } from "./constants";

/**
 * Describes the structure of environment variables object.
 */
export interface Env {
  KV: KVNamespace;
}

/**
 * Generates an HTML string with links to available routes.
 */
const generateHtml = (routes: { path: string }[]): string => `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>AFI Explorer API v2</title>
      </head>
      <body>
        <ul>
          ${routes.map((route) => `<li><a href="${route.path}">${route.path}</a></li>`).join("")}
        </ul>
      </body>
    </html>
`;

/**
 * Sends a cached response with data retrieved from the provided environment and path.
 */
async function cached(env: Env, path: string): Promise<Response> {
  try {
    const cachedData = await env.KV.get(path);
    return new Response(cachedData, {
      headers: { "content-type": "application/json;charset=UTF-8" },
    });
  } catch {
    return new Response("Failed to retrieve data!", { status: 500 });
  }
}

/**
 * Extracts a JSON string from the provided text.
 */
const trim = (text: string): string => {
  const startIndex = text.lastIndexOf("[{");
  const endIndex = text.lastIndexOf("}]");
  const publications = text.substring(startIndex, endIndex + 2);
  return `{"publications":` + publications + `}`;
};

/**
 * Stores data on a schedule, utilizing the provided event, environment, and Sentry instance.
 */
async function storeOnSchedule(event: ScheduledEvent, env: Env): Promise<void> {
  const ms = event.scheduledTime;
  const ctr = Math.floor(ms / (60000 * CRON_INTERVAL_MIN));
  const route = ROUTES[ctr % ROUTES.length];

  try {
    const response = await fetch(route.url, {
      headers: {
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        "User-Agent": "Mozilla/5.0",
      },
      method: "GET",
      redirect: "follow",
    });
    if (!response.ok) {
      throw new Error(
        `Failed to fetch ${route.url} - ${response.status}: ${response.statusText}`,
      );
    }
    const text = await response.text();
    const trimmedText = trim(text);
    if (!trimmedText.startsWith('{"publications":[{"PubID":')) {
      throw new Error(`Data validation failed for ${route.path}`);
    }
    await env.KV.put(route.path, trimmedText);
    console.log("Cached:", route.path);
  } catch (error) {
    console.error(`Failed to cache: ${route.path}`, error);
    throw new Error(`Failed to cache ${route.path}`);
  }
}

export default {
  async scheduled(event: ScheduledEvent, env: Env) {
    await storeOnSchedule(event, env);
  },

  async fetch(request: Request, env: Env): Promise<Response> {
    const requestedPath = new URL(request.url).pathname;
    const availablePaths = ROUTES.map((route) => route.path);

    if (requestedPath === "/v2/") {
      return new Response(generateHtml(ROUTES), {
        headers: { "content-type": "text/html;charset=UTF-8" },
      });
    } else if (availablePaths.includes(requestedPath)) {
      return cached(env, requestedPath);
    } else {
      const origin = new URL(request.url).origin;
      return Response.redirect(`${origin}/v2/`);
    }
  },
};
