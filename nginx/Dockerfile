FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# ENV DOCKERIZE_VERSION v0.7.0

# RUN apt-get update  -y \
#     && apt-get install -y wget \
#     && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
#     && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

RUN mkdir /var/www/node/public -p && touch /var/www/node/public/teste.js
