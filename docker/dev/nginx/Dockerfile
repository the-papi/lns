FROM nginx:1.19-alpine

COPY docker/dev/nginx/application.conf /etc/nginx/conf.d/default.conf

COPY . /app

WORKDIR /app

