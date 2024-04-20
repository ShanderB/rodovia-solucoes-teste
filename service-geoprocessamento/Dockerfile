# Use uma imagem que tenha tanto o JDK quanto o Maven
FROM maven:3.8.1-openjdk-17 as build

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o pom.xml e baixe as dependências primeiro para aproveitar o cache do Docker
COPY pom.xml .
RUN mvn dependency:go-offline

# Copie o código fonte
COPY src ./src

# Construa o jar
RUN mvn clean package -DskipTests

# Inicie uma nova etapa para a imagem final
FROM openjdk:17

# Copie o jar do estágio de construção
COPY --from=build /app/target/grs-app.jar app.jar

# Defina as variáveis de ambiente
ENV SPRING_PROFILES_ACTIVE=docker

# Defina o ponto de entrada
ENTRYPOINT ["java", "-jar", "app.jar"]