# Teste Fullstack Rodovia Soluções

# Para iniciar o back:

Tenha o Docker instalado e configurado. 
Após isso, rode o comando: `cd service-geoprocessamento/ && docker-compose up -d`

O back estará rodando na porta `5000`.<br>
Pode se fazer requests pelo `localhost:5000/getEndereco?latitude={latitude}&longitude={longitude}` baseado em WGS84.<br>
O Mongo estará rodando na porta `27017`. Para se conectar, utilize `mongodb://localhost:27017/`<br>

# Para iniciar o front:

Tenha o node instalado e configurado.<br>
Após isso, rode o comando: `cd webapp-geoprocessamento/ && npm i && npm start`<br>
O front estará rodando na porta `4200`.<br>

Para visualizar os testes, primeiro execute o comando `npm test`.<br><br>
Após finalizar, o report de testes estará localizado em `webapp-geoprocessamento/coverage/index.html`.<br>
Abra-o no navegador.

# Técnologias usadas:

#### Back:
- Spring Boot
- Spring Boot Cachable (fazer o cache das requisições).
- Java 17
- Maven 3.9.6
- Maven
- Lombok (Utilitários para facilitar escrita de código)
- Mongodb (A cada request, gardar no banco)
- Docker

#### Front:
- Angular 17
- Angular Material
- Node.JS
- RxJs
- Jasmine
- Karma