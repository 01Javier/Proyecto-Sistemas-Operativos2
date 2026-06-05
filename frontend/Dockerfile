FROM node:22-alpine AS build
WORKDIR /app
COPY ProyectoAngularPP3/ .
RUN npm install
RUN npx ng build --configuration production

FROM nginx:1.29-alpine
COPY --from=build /app/dist/proyecto-angular-pp3/browser /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80