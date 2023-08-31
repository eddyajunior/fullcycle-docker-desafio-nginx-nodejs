# Imagem que será utilizada
FROM node:15

# Diretório de trabalho
WORKDIR /usr/src/app

COPY package.json package.json
COPY package-lock.json package-lock.json

ENV DOCKERIZE_VERSION v0.7.0

RUN sed -i -e 's/deb.debian.org/archive.debian.org/g' \
           -e 's|security.debian.org|archive.debian.org/|g' \
           -e '/stretch-updates/d' /etc/apt/sources.list

RUN apt-get update  -y \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

RUN npm install --force

# Diretório onde deverão ser copiados os arquivos (. . copia todos os arquivos do diretório)
COPY . . 

# Porta que será exposta externamente no container
EXPOSE 3000

# Comando que será executado ao iniciar
CMD ["node", "index.js"]