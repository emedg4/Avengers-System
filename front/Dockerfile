FROM nginx:1.16.1
RUN apt-get install -y npm
RUN npm install -y node
WORKDIR /etc/nginx/conf.d/
COPY docker/default.conf .
# RUN npm install
RUN /etc/init.d/nginx restart
