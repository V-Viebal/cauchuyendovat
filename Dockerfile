# syntax=docker/dockerfile:1
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY mirrored_pages /usr/share/nginx/html/mirrored_pages
COPY _next /usr/share/nginx/html/_next
COPY public /usr/share/nginx/html/public
COPY site.css /usr/share/nginx/html/site.css
COPY *.jpg /usr/share/nginx/html/
COPY *.png /usr/share/nginx/html/
RUN apk add --no-cache wget \
    && chmod -R a+rX /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --retries=3 CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
