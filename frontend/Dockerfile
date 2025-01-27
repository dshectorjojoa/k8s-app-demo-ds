FROM nginx:alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/share/nginx/html

# Copia directamente los archivos de la carpeta src al contenedor
COPY ./src . 

# Copia la configuración de NGINX
COPY nginx.conf /etc/nginx/conf.d/default.conf
