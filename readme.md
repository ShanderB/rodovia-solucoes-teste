# Teste Fullstack Rodovia Soluções

# Para iniciar o projeto:
Tenha o Docker instalado e configurado.<br>
Tenha o Node.JS instalado e configurado.<br>

Caso no Linux:<br>
Execute o comando: `bash build_projeto.sh`. (Utilize no bash)<br><br>

Caso no Windows:<br>
Execute o comando: `bash build_projeto.bat`. (Utilize no cmd)<br>

O front estará rodando na porta `4200`.<br>

Para visualizar os testes, primeiro execute o comando `npm test`.<br>
Após finalizar, o report de testes estará localizado em `webapp-geoprocessamento/coverage/index.html`.<br>
Abra-o no navegador.<br>

O back estará rodando na porta `5000`.<br>
Pode se fazer requests GET pelo `localhost:5000/getEndereco?latitude={latitude}&longitude={longitude}` baseado em WGS84.<br>
O Mongo estará rodando na porta `27017`. Para se conectar, utilize `mongodb://localhost:27017/`<br>

# Para iniciar o back manualmente:
Tenha o Docker instalado e configurado.<br>
Após isso, rode o comando: `cd service-geoprocessamento/ && docker-compose up -d`<br>
Caso queira rodar localmente (sem o docker), execute `mvn spring-boot:run -Dspring-boot.run.profiles=local`


# Para iniciar o front manualmente:
Tenha o node instalado e configurado.<br>
Após isso, rode o comando: `cd webapp-geoprocessamento/ && npm i && npm start`<br>


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