/**
 * Describes the structure of a route object.
 */
export interface Route {
    path: string;
    url: string
}

/**
 * A constant array of route objects, each specifying a path, orgId, and catId.
 */
export const ROUTES: Route[] = [
    { path: "/v2/air-force/departmental", url: "https://www.e-publishing.af.mil/DesktopModules/MVC/EPUBS/EPUB/GetPubsBySeriesView/?orgID=10141&catID=1&series=-1" },
    { path: "/v2/air-national-guard/air-national-guard", url: "https://www.e-publishing.af.mil/DesktopModules/MVC/EPUBS/EPUB/GetPubsBySeriesView/?orgID=44&catID=16&series=-1" },
    { path: "/v2/major-commands/air-combat-command", url: "https://www.e-publishing.af.mil/DesktopModules/MVC/EPUBS/EPUB/GetPubsBySeriesView/?orgID=1&catID=2&series=-1" },
    { path: "/v2/major-commands/air-education-and-training-command", url: "https://www.e-publishing.af.mil/DesktopModules/MVC/EPUBS/EPUB/GetPubsBySeriesView/?orgID=6887&catID=2&series=-1" },
    { path: "/v2/major-commands/air-force-global-strike-command", url: "https://www.e-publishing.af.mil/DesktopModules/MVC/EPUBS/EPUB/GetPubsBySeriesView/?orgID=59&catID=2&series=-1" },
    { path: "/v2/major-commands/air-force-materiel-command", url: "https://www.e-publishing.af.mil/DesktopModules/MVC/EPUBS/EPUB/GetPubsBySeriesView/?orgID=4&catID=2&series=-1" },
    { path: "/v2/major-commands/air-force-reserve-command", url: "https://www.e-publishing.af.mil/DesktopModules/MVC/EPUBS/EPUB/GetPubsBySeriesView/?orgID=10149&catID=2&series=-1" },
    { path: "/v2/major-commands/air-force-special-operations-command", url: "https://www.e-publishing.af.mil/DesktopModules/MVC/EPUBS/EPUB/GetPubsBySeriesView/?orgID=6&catID=2&series=-1" },
    { path: "/v2/major-commands/air-mobility-command", url: "https://www.e-publishing.af.mil/DesktopModules/MVC/EPUBS/EPUB/GetPubsBySeriesView/?orgID=9774&catID=2&series=-1" },
    { path: "/v2/major-commands/pacific-air-force", url: "https://www.e-publishing.af.mil/DesktopModules/MVC/EPUBS/EPUB/GetPubsBySeriesView/?orgID=8&catID=2&series=-1" },
    { path: "/v2/major-commands/united-states-air-force-in-europe-af-africa", url: "https://www.e-publishing.af.mil/DesktopModules/MVC/EPUBS/EPUB/GetPubsBySeriesView/?orgID=9&catID=2&series=-1" },
    { path: "/v2/united-states-space-force/space-operations-command", url: "https://www.e-publishing.af.mil/DesktopModules/MVC/EPUBS/EPUB/GetPubsBySeriesView/?orgID=47&catID=20&series=-1" },
    { path: "/v2/united-states-space-force/space-systems-command", url: "https://www.e-publishing.af.mil/DesktopModules/MVC/EPUBS/EPUB/GetPubsBySeriesView/?orgID=16297&catID=20&series=-1" },
    { path: "/v2/united-states-space-force/united-states-space-force", url: "https://www.e-publishing.af.mil/DesktopModules/MVC/EPUBS/EPUB/GetPubsBySeriesView/?orgID=16023&catID=20&series=-1" },
    { path: "/v2/united-states-space-force/ussf-coo", url: "https://www.e-publishing.af.mil/DesktopModules/MVC/EPUBS/EPUB/GetPubsBySeriesView/?orgID=16254&catID=20&series=-1" },
    { path: "/v2/supplemental", url: "https://static.afiexplorer.com/index.json" }
];


/**
 * A constant defining the interval (in minutes) for the cron job.
 */
export const CRON_INTERVAL_MIN = 10;
