# Create image based off of the official Node 10 image
FROM node:19.1-alpine3.15 as builder

# Copy dependency definitions
COPY package.json package-lock.json ./

## installing and Storing node modules on a separate layer will prevent unnecessary npm installs at each build
## --legacy-peer-deps as ngx-bootstrap still depends on Angular 14
RUN npm i --legacy-peer-deps && mkdir /app && mv ./node_modules ./app

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Get all the code needed to run the app
COPY . /app/

# Build server side bundles
#RUN npm run build:ssr
#RUN node --max-old-space-size=4096 ./node_modules/.bin/ng build --configuration=production,server

# ... (las partes anteriores de tu Dockerfile)

# Construir la aplicación para el navegador
RUN node --max-old-space-size=4096 ./node_modules/.bin/ng build --configuration=production

# Construir la aplicación para el servidor (SSR)
RUN node --max-old-space-size=4096 ./node_modules/.bin/ng run frontend:server:production

# ... (las partes posteriores de tu Dockerfile)



FROM node:19.1-alpine3.15
## From 'builder' copy published folder
COPY --from=builder /app /app

WORKDIR /app
# Expose the port the app runs in
EXPOSE 4000

USER node

CMD ["node", "dist/frontend/server/main.js"]
