/** Auth-core admin UI: /settings/api-tokens page + nav + commands. */
import { defineAdminUi } from "@gutu-host/plugin-ui-contract";
import { ApiTokensPage } from "./pages/ApiTokensPage";

export const adminUi = defineAdminUi({
  id: "auth-core",
  pages: [
    {
      id: "auth-core.api-tokens",
      path: "/settings/api-tokens",
      title: "API tokens",
      description: "Long-lived bearer tokens for external integrations.",
      Component: ApiTokensPage,
      icon: "Key",
    },
  ],
  navEntries: [
    {
      id: "auth-core.nav.api-tokens",
      label: "API tokens",
      icon: "Key",
      path: "/settings/api-tokens",
      section: "settings",
      order: 30,
    },
  ],
  commands: [
    {
      id: "auth-core.cmd.api-tokens",
      label: "Open API token settings",
      icon: "Key",
      keywords: ["token", "api", "bearer", "auth", "integration"],
      run: () => { window.location.hash = "/settings/api-tokens"; },
    },
  ],
});

export { ApiTokensPage } from "./pages/ApiTokensPage";
