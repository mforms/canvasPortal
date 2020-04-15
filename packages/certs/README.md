# SSL Certificate Process

## Dev cert

We are using a valid SSL from a CA in dev. By spinning
up local server and running cert-bot.

Certificate expires every 3 months.

##### Access required to do this:

- Ability to point domain to your **WAN IP**
- Ability to route port 80 to your local machine
- Docker and Node should be installed local machine

_If unable to configure your lan: spining a cheap server is also a valid option_

##### Steps for Making a new Dev cert

1. Point your domaine to you WAN IP.
2. Route port 80 to your local machine.
3. Run `yarn install`
4. Run `yarn reset` to remove old cert.
5. Run `yarn start` to start the local web server listening to port 80
6. Run script: `yarn generate` in a new command line tab to issue the CA challenge.
7. The new CA keys should be in the archive folder and ready to commit
8. Change back domaine to point to 127.0.0.1 and remove port forwarding.

_It's ok to commit these keys since they are just used for dev_
