# Google Drive source deployment refresh

- Source: Google Drive file `1HU1QwgwRD0gY01gk-Dka_xP10ck3Mt30`
- Fresh download verified: 2026-09-20 (Asia/Ho_Chi_Minh)
- Archive size: `3529407` bytes
- Archive SHA-256: `b93c66fa3152ef2893fbaaa9d341289fde6dea1e900531a3b24207fd704291d1`
- ZIP integrity: `unzip -t` passed; `121` archive entries
- Target: `https://cauchuyendovat.workgot.vn`
- Existing Coolify resource: `avcoiox0smzv9wwyh0ztyd3k` on node `6th`

The fresh archive was compared with the canonical project. It is byte-identical for the application tree except for the previously documented older plain-anchor variants in `app/components/monos-shell.tsx`, `app/factories/page.tsx`, and `app/feed/page.tsx`; the canonical `next/link` versions remain in use. The archive does not include the deployment files, which remain preserved in this project.

No separate `brands` source directory or route was present in the fresh archive, so no `/brands` route was added.
