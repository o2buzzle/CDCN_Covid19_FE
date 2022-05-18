FROM node:18 as build-container
COPY ./ /app/
WORKDIR /app/
RUN npm install
ENV REACT_APP_API_HOST=/api
RUN npm run build

FROM alpine:latest
RUN apk add ca-certificates nginx
EXPOSE 80
RUN rm /etc/nginx/http.d/default.conf
COPY ./configs/oner-frontend /etc/nginx/http.d/oner-frontend.conf
COPY --from=build-container /app/build /app/public
ENTRYPOINT ["nginx", "-g", "daemon off;"]
