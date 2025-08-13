FROM node:16-bullseye

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

# This will always bust the cache so that images are always freshly downloaded
ADD "https://www.random.org/cgi-bin/randbyte?nbytes=10&format=h" skipcache
RUN yarn download-images
RUN node ./apps/cli/dist/index.js --create-cache
CMD yarn start