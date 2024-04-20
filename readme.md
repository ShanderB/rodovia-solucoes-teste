Para iniciar o back:
cd service-geoprocessamento/
docker-compose up -d

Para iniciar o front:
cd webapp-geoprocessamento/

Técnologias usadas:

Back:
Spring Boot
Spring Boot Cachable (fazer o cache das requisições).
Java 17
Maven 3.9.6
Maven
Lombok (Utilitários para facilitar escrita de código)
Mongodb (A cada request, gardar no banco)
Docker

Front:
Angular 17
Angular Material
Node.JS
RxJs
Jasmine
Karma