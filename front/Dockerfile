FROM node:10.16 as build-deps

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
RUN npm install --ignore-scripts

COPY . /usr/src/app
CMD [ "npm", "run", "start" ]
