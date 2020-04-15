#!/bin/bash
echo 'Make sure you have started the local server and verified that it can be accessed from the internet.'
echo 'Enter your email:'
read email
echo 'Enter the domaine name:'
read domain
echo 'is this a test run?(yes or no)'
read staging
# Enable staging mode if needed
if [ $staging != "no" ]; then staging_arg="--staging"; fi
# Enable debug mode if needed
if [ $staging != "no" ]; then debug_arg="--debug-challenges"; fi

docker-compose run --rm --entrypoint "\
  certbot certonly --webroot -w /var/www/certbot \
    $staging_arg \
    $debug_arg \
    --email $email \
    -d $domain \
    --rsa-key-size 4096 \
    --agree-tos \
    --force-renewal" certbot