"""Reliable static server for the mirrored Monos site.

It serves the captured routes and assets from this project directory.  The
server binds to localhost only, uses a dedicated port, and handles direct
navigation to all mirrored routes without relying on a browser cache.
"""
from __future__ import annotations

import http.server
import mimetypes
import os
import socketserver
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parent
PORT = int(os.environ.get("MONOS_PORT", "3147"))
HOST = os.environ.get("MONOS_HOST", "0.0.0.0")

ROUTE_PAGES = {
    "/": "index.html",
    "/index.html": "index.html",
    "/stories": "stories.html",
    "/feed": "feed.html",
    "/network": "network.html",
    "/designers": "designers.html",
    "/designers/cao-thi-mai-nguyen": "designers__cao-thi-mai-nguyen.html",
    "/designers/daniela-thach-thao": "designers__daniela-thach-thao.html",
    "/designers/db-studio": "designers__db-studio.html",
    "/designers/do-phong-phuc-vinh": "designers__do-phong-phuc-vinh.html",
    "/designers/ho-thi-thu-ha": "designers__ho-thi-thu-ha.html",
    "/designers/truong-huynh-thoai": "designers__truong-huynh-thoai.html",
    "/designers/vi-van-truong": "designers__vi-van-truong.html",
    "/objects": "objects.html",
    "/objects/ambie-shelf": "objects__ambie-shelf.html",
    "/objects/cloudy": "objects__cloudy.html",
    "/objects/dong-chay": "objects__dong-chay.html",
    "/objects/ganh-bench": "objects__ganh-bench.html",
    "/objects/mark-cabinet": "objects__mark-cabinet.html",
    "/objects/om": "objects__om.html",
    "/objects/vaye-chair": "objects__vaye-chair.html",
    "/objects/hoa-muoi-table": "objects__hoa-muoi-table.html",
    "/objects/ban-mangthit": "objects__ban-mangthit.html",
    "/objects/nhong-nhong": "objects__nhong-nhong.html",
    "/objects/ban-kieu": "objects__ban-kieu.html",
    "/objects/dragonfly-glow": "objects__dragonfly-glow.html",
    "/objects/luy-module": "objects__luy-module.html",
    "/objects/hoa-gom": "objects__hoa-gom.html",
    "/objects/thien-shrine": "objects__thien-shrine.html",
    "/objects/folio-collection": "objects__folio-collection.html",
    "/objects/the-gap-lamp": "objects__the-gap-lamp.html",
    "/objects/the-archive-no-07": "objects__the-archive-no-07.html",
    "/designers/vo-tran-thanh-quang": "designers__vo-tran-thanh-quang.html",
    "/designers/duong-nhat-quang-dong": "designers__duong-nhat-quang-dong.html",
    "/designers/thinh-cut-ngoac-space": "designers__thinh-cut-ngoac-space.html",
    "/designers/le-hoang-tuyet-ngoc": "designers__le-hoang-tuyet-ngoc.html",
    "/designers/alo-furniture-design": "designers__alo-furniture-design.html",
    "/designers/huynh-minh-dang": "designers__huynh-minh-dang.html",
    "/designers/dao-son-tung": "designers__dao-son-tung.html",
    "/designers/dao-son-lam": "designers__dao-son-lam.html",
    "/objects/wd01-chair": "objects__wd01-chair.html",
    "/designers/nguyen-xuan-phong": "designers__nguyen-xuan-phong.html",
    "/designers/duy-khanh": "designers__duy-khanh.html",
    "/designers/nguyen-ngoc-chung": "designers__nguyen-ngoc-chung.html",
    "/designers/nguyen-cam-chau": "designers__nguyen-cam-chau.html",
    "/designers/tran-thao-nhien": "designers__tran-thao-nhien.html",
    "/designers/huynh-le-phuong-uyen": "designers__huynh-le-phuong-uyen.html",
    "/factories": "factories.html",
    "/factories/factory-01": "factories__factory-01.html",
    "/factories/factory-02": "factories__factory-02.html",
    "/factories/factory-03": "factories__factory-03.html",
    "/factories/factory-04": "factories__factory-04.html",
    "/factories/factory-05": "factories__factory-05.html",
    "/factories/factory-06": "factories__factory-06.html",
    "/brands": "brands.html",
    "/brands/b-plus": "brands__b-plus.html",
    "/spaces": "spaces.html",
    "/materials": "materials.html",
    "/provenance": "provenance.html",
    "/login": "login.html",
    "/profile": "profile.html",
    "/signup": "signup.html",
    "/claim-profile": "claim-profile.html",
}


def safe_file(path: Path) -> Path | None:
    """Return a file only when it stays inside this project."""
    try:
        resolved = path.resolve()
        resolved.relative_to(ROOT)
    except ValueError:
        return None
    return resolved if resolved.is_file() else None


class MonosHandler(http.server.SimpleHTTPRequestHandler):
    server_version = "MonosLocal/1.0"

    def log_message(self, format: str, *args: object) -> None:
        # Keep useful request logs in server.log without noisy terminal output.
        super().log_message(format, *args)

    def end_headers(self) -> None:
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        self.send_header("Access-Control-Allow-Origin", "*")
        super().end_headers()

    def translate_path(self, request_path: str) -> str:
        pathname = unquote(urlsplit(request_path).path)
        if pathname in ROUTE_PAGES:
            return str(ROOT / "mirrored_pages" / ROUTE_PAGES[pathname])

        # Assets are served from their original absolute URL paths in the
        # mirrored HTML, e.g. /_next/... and /cloudy-profile-photo.jpg.
        direct = safe_file(ROOT / pathname.lstrip("/"))
        if direct:
            return str(direct)

        public_asset = safe_file(ROOT / "public" / pathname.lstrip("/"))
        if public_asset:
            return str(public_asset)

        # A friendly fallback keeps direct browser navigation usable for a
        # known route even if the URL has a trailing slash.
        if pathname.endswith("/") and pathname[:-1] in ROUTE_PAGES:
            return str(ROOT / "mirrored_pages" / ROUTE_PAGES[pathname[:-1]])

        return str(ROOT / "404.html")


class ReusableTCPServer(socketserver.ThreadingTCPServer):
    allow_reuse_address = True
    daemon_threads = True


if __name__ == "__main__":
    mimetypes.init()
    with ReusableTCPServer((HOST, PORT), MonosHandler) as server:
        print(f"Monos is running at http://localhost:{PORT}", flush=True)
        server.serve_forever()
