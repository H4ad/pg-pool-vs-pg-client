FROM node:20-alpine AS builder_deps

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

# Install deps for production
RUN npm ci --ignore-scripts --production && npm cache clean --force

FROM node:20-alpine AS runner

# Set Node Env
ENV NODE_ENV=production

# Create app directory
WORKDIR /usr/src/app

# Copy builded API
COPY --from=builder_deps /usr/src/app/node_modules ./node_modules
COPY --from=builder_deps /usr/src/app/package.json ./package.json
COPY index.mjs index.mjs

# Because of health check
RUN apk add --update curl && \
    rm -rf /var/cache/apk/*

EXPOSE 3000
CMD [ "node", "index.mjs" ]