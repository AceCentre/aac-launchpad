FROM node:16

WORKDIR /app
COPY . .

RUN apt-get update && \
	apt-get install -y pdftk

RUN yarn install
RUN yarn build
RUN yarn download-images

CMD yarn start