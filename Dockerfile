FROM node:16-bullseye

ARG ACCESS_KEY_ID
ARG SECRET_ACCESS_KEY
ARG BASE_URL
ARG COLLECT_ANALYTICS

# Set environment variables for the build process
ENV ACCESS_KEY_ID=$ACCESS_KEY_ID
ENV SECRET_ACCESS_KEY=$SECRET_ACCESS_KEY
ENV BASE_URL=$BASE_URL
ENV COLLECT_ANALYTICS=$COLLECT_ANALYTICS

WORKDIR /app
COPY . .

# Symbols will be downloaded from S3 during runtime if AWS credentials are provided

RUN apt-get update && \
	apt-get install -y pdftk libvips-dev

RUN yarn install
RUN yarn build

# This will always bust the cache so that images are always freshly downloaded
ADD "https://www.random.org/cgi-bin/randbyte?nbytes=10&format=h" skipcache
# Download symbols from S3 if credentials are provided
RUN yarn download-images
# Cache generation removed to prevent Docker build timeouts
# RUN node ./apps/cli/dist/index.js --create-cache
CMD yarn start