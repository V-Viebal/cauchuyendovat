# Google Drive source deployment

- Source: Google Drive file `1HU1QwgwRD0gY01gk-Dka_xP10ck3Mt30`
- Re-imported: 2026-09-19 (Asia/Ho_Chi_Minh)
- Target: `https://cauchuyendovat.workgot.vn`
- Coolify resource: `avcoiox0smzv9wwyh0ztyd3k` on node `6th`

The Drive archive was downloaded and verified as a complete ZIP source export. Its application files match the canonical project except for four older anchor-link variants in `app/components/monos-shell.tsx`, `app/factories/page.tsx`, and `app/feed/page.tsx`; the canonical `next/link` versions are retained. The archive does not include the deployment files `Dockerfile`, `nginx.conf`, `.openai/hosting.json`, or `.dockerignore`, so the canonical versions remain part of the complete deployable source tree.

This marker records the verified source import and deployment version. It does not change application behavior.
