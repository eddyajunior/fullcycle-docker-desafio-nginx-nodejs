# Curso Full Cycle 3.0 - Módulo Docker

## Desafio 02 - Proxy reverso com nginx, nodejs e mysql

### Pré requisitos
1. Docker ou WSL2

### Como utilizar 
*** Obs: os procedimentos abaixo deverão ser executados na máquina eu possui o Docker ou WSL2 ***

1. acessar a máquina (Docker ou WSL2) que irá executar os containers
2. clonar o repositório através do comando abaixo
   ```
   git clone https://github.com/eddyajunior/fullcycle-docker-desafio-nginx-nodejs.git
   ```
3. na pasta "fullcycle-docker-desafio-nginx-nodejs" executar o comando
   ```
   docker compose up -d --build
   ```
4. abrir o navegador e digitar url http://localhost:8080
5. será aberta a página com o título Full Cycle Rocks! e a lista de usuários cadastrados