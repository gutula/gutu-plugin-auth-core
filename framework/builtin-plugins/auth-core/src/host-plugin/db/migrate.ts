/** auth-core schema. Owned by the plugin so it travels with the plugin —
 *  drop the plugin and the tables go with it. CREATE TABLE IF NOT EXISTS
 *  + CREATE INDEX IF NOT EXISTS so it's safe to re-run on every boot. */
import { db } from "@gutu-host";

export function migrate(): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS api_tokens (
      id          TEXT PRIMARY KEY,
      tenant_id   TEXT NOT NULL,
      name        TEXT NOT NULL,
      token_hash  TEXT NOT NULL UNIQUE,
      token_prefix TEXT NOT NULL,
      scopes      TEXT NOT NULL,
      created_by  TEXT NOT NULL,
      created_at  TEXT NOT NULL,
      expires_at  TEXT,
      last_used_at TEXT,
      revoked_at  TEXT
    );
    CREATE INDEX IF NOT EXISTS api_tokens_tenant_idx ON api_tokens(tenant_id);
    CREATE INDEX IF NOT EXISTS api_tokens_hash_idx ON api_tokens(token_hash);
`);
}
