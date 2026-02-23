FROM nginx:1.27-alpine

COPY . /usr/share/nginx/html
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

RUN rm -f /usr/share/nginx/html/Dockerfile \
    /usr/share/nginx/html/nginx.conf.template

EXPOSE 8080
