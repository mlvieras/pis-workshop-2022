FROM node:16.5.0

RUN npm i -g npm@7.24.0

RUN mkdir -p /code/node_modules && chown -R node:node /code

WORKDIR /code

COPY --chown=node:node package*.json ./

RUN npm install

USER node

COPY --chown=node:node . .

EXPOSE 3000

# NOTE: Why aren't we running `npm i` in the image itself?
#   The image will be built only once for every time we change this dockerfile. Installing new packages
#   would require us to remove the image and rebuild it, which is prone to error and time-consuming.
#   Running `npm i` everytime we start the container will help us always stay up to date with the packages.
#   You could also run it manually by ssh-ing into the container.
CMD npm i && npm start
