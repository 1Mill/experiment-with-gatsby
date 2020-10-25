FROM node:14-alpine

RUN \
	apk update && \
	apk add git && \
	npm install -g gatsby-cli

WORKDIR /app

CMD [ "gatsby", "develop" ]
