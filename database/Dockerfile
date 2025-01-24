FROM postgres:13-alpine
COPY init.sql /docker-entrypoint-initdb.d/
ENV POSTGRES_PASSWORD=mysecretpassword
ENV POSTGRES_DB=counter