FROM node:16

ARG ACCESS_KEY_ID
ARG SECRET_ACCESS_KEY
ARG BASE_URL
ARG COLLECT_ANALYTICS

WORKDIR /app
COPY . .

RUN apt-get update && \
	apt-get install -y pdftk

RUN yarn install
RUN yarn build
RUN yarn download-images

CMD yarn start