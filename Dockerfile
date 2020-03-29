FROM node:13.10.1

WORKDIR /workdir
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY public public
COPY src src

RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm", "start"]
