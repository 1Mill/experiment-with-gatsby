FROM node:14-alpine

RUN \
	apk update && \
	apk add git && \
	npm install -g gatsby-cli@^2.12.111

WORKDIR /app

CMD [ "gatsby", "develop", "--host=0.0.0.0" ]
