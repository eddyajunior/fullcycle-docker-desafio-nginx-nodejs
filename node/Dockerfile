# Imagem que será utilizada
FROM node:latest

# Diretório de trabalho
WORKDIR /usr/src/app

COPY package.json package.json

ENV DOCKERIZE_VERSION v0.7.0

RUN apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

RUN npm i --force 

# Diretório onde deverão ser copiados os arquivos (. . copia todos os arquivos do diretório)
COPY . . 

# Porta que será exposta externamente no container
EXPOSE 3000