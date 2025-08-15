FROM node:16-bullseye

ARG ACCESS_KEY_ID
ARG SECRET_ACCESS_KEY
ARG BASE_URL
ARG COLLECT_ANALYTICS

WORKDIR /app
COPY . .

# Copy symbols to the backend private directory
RUN mkdir -p apps/backend/private/symbols/pcs && \
    cp symbols/pcs/more.png apps/backend/private/symbols/pcs/more.png

RUN apt-get update && \
	apt-get install -y pdftk libvips-dev

RUN yarn install
RUN yarn build

# This will always bust the cache so that images are always freshly downloaded
ADD "https://www.random.org/cgi-bin/randbyte?nbytes=10&format=h" skipcache
# Image download disabled - requires AWS credentials
# RUN yarn download-images
# Cache generation removed to prevent Docker build timeouts
# RUN node ./apps/cli/dist/index.js --create-cache
CMD yarn start