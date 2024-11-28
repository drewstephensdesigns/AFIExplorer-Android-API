<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/drewstephensdesigns/AFIExplorer">
    <img src="https://github.com/drewstephensdesigns/AFIExplorer/blob/master/screenshots/app-icon-new.png" alt="Logo" width="100" height="100">
  </a>
</div>

<h2 align="center">Welcome</h2>
<p>This is the AFI Explorer API, a serverless API built using Cloudflare Workers. It periodically fetches and caches data from the U.S. Air Force e-Publishing website and serves it through various endpoints.</p>

### Prerequisites
Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/en) (version 16.x or higher)
- [NPM](https://www.npmjs.com) (version 7.x or higher)
- [Cloudflare Account](https://www.cloudflare.com)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/)

<h2>Getting Started</h2>
<p>These instructions will help you set up a Cloudflare account, configure your environment, and deploy the Worker.</p>

### 1. Cloudflare Account Setup

1. **Create a Cloudflare Account:**

   Visit [Cloudflare Sign-Up](https://dash.cloudflare.com/sign-up) and create a new account if you do not have one already.

2. **Access Cloudflare Workers:**

   After signing in, go to your Cloudflare dashboard. On the left sidebar, click on "Workers" to access Cloudflare Workers.

### 2. Install Wrangler CLI

Wrangler is a command-line tool for managing Cloudflare Workers.

```bash
npm install -g wrangler
```

### 3. Authenticate Wrangler with Cloudflare

Run the following command to log in to your Cloudflare account:

```bash
wrangler login
```

This will open a browser window for you to authenticate Wrangler with your Cloudflare account.

### 4. Set Up the Project

1. **Extract the Project Files:**

   Once you have the ZIP archive of the source code, unzip the contents. Make sure that you are in the `api/` directory where the project files are located.

2. **Install Dependencies:**

   Run the following command to install the project dependencies:

   ```bash
   npm install
   ```

### 5. Configure the Project

1. **Create a KV Namespace:**

   - Go to the Cloudflare dashboard.
   - Navigate to Workers KV > Create Namespace and create a new namespace.
   - Note down the namespace ID as you will need it for the configuration.

2. **Update `wrangler.toml`:**

   Replace `your_kv_namespace_id_here` with your actual KV namespace ID in the `api/wrangler.toml` file.

### 6. Deploy the Worker

Submit the following command to deploy your Cloudflare Worker:

```bash
npm run deploy
```

This will bundle and upload your Worker script to Cloudflare. It will be available at a persistent `*.workers.dev` domain that you can access from user applications.

## Usage

Once deployed, the Worker will automatically fetch and cache data according to the specified cron schedule (every 10 minutes). Please note that the KV store will need to be "seeded," so data may not appear, or will appear incomplete, until all scheduled cron jobs have run at least once.

## Development

### Local Development

Use the following command to run the Worker in development mode:

```bash
npm start
```

Wrangler will run your Worker on `http://localhost:8787`.

---

Following these steps should help you set up and deploy your Cloudflare Worker successfully. If you encounter any issues, refer to the [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/).

