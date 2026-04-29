/** Host-plugin contribution for auth-core.
 *
 *  Mounts the api-tokens router at /api-tokens via the shell's plugin loader. */
import type { HostPlugin } from "@gutu-host/plugin-contract";
import { migrate } from "./db/migrate";
import { apiTokenRoutes } from "./routes/api-tokens";

export const hostPlugin: HostPlugin = {
  id: "auth-core",
  version: "1.0.0",
  dependsOn: [],
  migrate,
  routes: [
    { mountPath: "/api-tokens", router: apiTokenRoutes }
  ],
  resources: [
    "auth.api-token",
    "auth.invitation",
    "auth.ip-policy",
    "auth.login-event",
    "auth.permission",
    "auth.role",
    "auth.session",
    "auth.user",
  ],
};

export * from "./lib";
