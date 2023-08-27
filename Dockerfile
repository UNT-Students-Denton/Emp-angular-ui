FROM node:19-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY /usr/src/app /usr/share/nginx/html
RUN npm run build 

FROM nginx:1.23.2-alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build  ./dist/angular-project /usr/share/nginx/html