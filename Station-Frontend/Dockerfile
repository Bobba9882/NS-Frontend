FROM node:18 as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build


FROM nginx:latest
COPY --from=build /usr/local/app/dist/station-frontend /usr/share/nginx/html
EXPOSE 4200:80
