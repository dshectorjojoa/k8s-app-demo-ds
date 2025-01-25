FROM node:18 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install -g @angular/cli
RUN npm install
COPY . .
RUN ng build

FROM nginx:alpine
COPY --from=builder /app/dist/frontend/browser /usr/share/nginx/html