FROM postgres:13-alpine
ENV POSTGRES_DB=counter
ENV POSTGRES_PASSWORD=mysecretpassword
COPY init.sql /docker-entrypoint-initdb.d/