# Google Drive source deployment marker

- Source: Google Drive file `1HU1QwgwRD0gY01gk-Dka_xP10ck3Mt30`
- Re-downloaded and verified: 2026-09-20 (Asia/Ho_Chi_Minh)
- Archive size: `3529407` bytes
- Archive SHA-256: `b93c66fa3152ef2893fbaaa9d341289fde6dea1e900531a3b24207fd704291d1`
- ZIP integrity: `unzip -t` passed; `121` archive entries
- Target: `https://cauchuyendovat.workgot.vn`
- Existing Coolify resource: `avcoiox0smzv9wwyh0ztyd3k` on node `6th`

The downloaded archive passed ZIP integrity verification. Its application tree was compared with this project: the archive contains older plain-anchor variants in `app/components/monos-shell.tsx`, `app/factories/page.tsx`, and `app/feed/page.tsx`, so the canonical `next/link` application changes are retained. The archive does not contain `Dockerfile`, `nginx.conf`, `.dockerignore`, or `.openai/hosting.json`; the required deployment files are preserved in this source tree.

The fresh manifest contains no `app/brands`, `brands`, or brand-named file entries. The source has brand-related copy/data inside existing pages, but no separate `/brands` route; no route was invented.

This marker records the fresh source verification and deployment version. It does not change application behavior.
