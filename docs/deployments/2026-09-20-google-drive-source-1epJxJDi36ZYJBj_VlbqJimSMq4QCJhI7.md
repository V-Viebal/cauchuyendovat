# Google Drive source import — brands archive

- Source: Google Drive file `1epJxJDi36ZYJBj_VlbqJimSMq4QCJhI7`
- Fresh download: 2026-09-20 (Asia/Ho_Chi_Minh), cache-busted
- Response: HTTP `200`, `application/octet-stream`, `Content-Disposition: monos-github-complete-brands.zip`
- Archive size: `10635065` bytes
- Archive SHA-256: `fa7726b37897232e9d5ab002214bd6cf1549c8bcd2ee268d4f01e7cd4239bbc1`
- ZIP integrity: `unzip -t` passed; `192` archive entries; no unsafe absolute, parent-traversal, backslash, or NUL paths
- Target: `https://cauchuyendovat.workgot.vn`
- Existing Coolify resource: `avcoiox0smzv9wwyh0ztyd3k` on node `6th`

The prior local source archive was `3529407` bytes with SHA-256
`b93c66fa3152ef2893fbaaa9d341289fde6dea1e900531a3b24207fd704291d1` and
passed ZIP integrity verification with `151` entries. The new archive is changed
and materially larger. It adds the brand, material, designer-detail,
factory-detail, and object-detail application tree plus the corresponding
public image/reference assets.

The archive source tree was imported into this project. The deployable files
`Dockerfile`, `nginx.conf`, and `.dockerignore` were preserved because they are
not present in the archive. Existing deployment records were preserved. No
secrets, environment files, or Git metadata were imported.

Manifest routes:

- `/`
- `/brands`
- `/brands/b-plus`
- `/designers`
- `/designers/[designerId]`
- `/designers/designer-01`
- `/designers/vi-van-truong`
- `/factories`
- `/factories/[factoryId]`
- `/feed`
- `/materials`
- `/network`
- `/objects`
- `/objects/ambie-shelf`
- `/objects/cloudy`
- `/objects/ganh-bench`
- `/provenance`
- `/spaces`
- `/stories`
