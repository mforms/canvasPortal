FROM nginx
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d/
COPY dist /usr/share/nginx/html