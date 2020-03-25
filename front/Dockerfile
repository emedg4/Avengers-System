# FROM nginx:1.16.1
# RUN apt-get update -y
# COPY default.conf /etc/nginx/conf.d/
# WORKDIR /app
# COPY . .
# RUN apt-get install -y npm
# RUN npm install -y node \
#     npm install
# RUN npm run build
# RUN /etc/init.d/nginx restart
FROM node:10.16 as build-deps

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
RUN npm install --ignore-scripts

COPY . /usr/src/app
CMD [ "npm", "run", "start" ]
# RUN npm run build
# # RUN CI=true yarn test

# # Stage 2 - the production environment
# FROM nginx:1-alpine
# COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
# COPY docker/default.conf /etc/nginx/conf.d/
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]