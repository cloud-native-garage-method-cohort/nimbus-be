# FROM quay.io/linxianer12/nestjs-node14 AS build

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN yarn install --only=production && yarn build

# # COPY . .

# FROM quay.io/linxianer12/nestjs-node14 as production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /usr/src/app

# COPY package*.json ./

# # RUN yarn install --only=productioncd

# COPY . .

# COPY --from=development /usr/src/app/dist ./dist

# CMD ["node", "dist/main"]


#FROM docker.io/node:14-alpine as builder
FROM quay.io/linxianer12/nestjs-node14 as builder

ENV NODE_ENV build

WORKDIR /home/node

COPY . /home/node

RUN yarn install --only=production && yarn build && ls
# ---

FROM docker.io/node:14-alpine

ENV NODE_ENV production

WORKDIR /home/node

COPY --from=builder /home/node/package*.json /home/node/
COPY --from=builder /home/node/dist/ /home/node/dist/
COPY --from=builder /home/node/node_modules/ /home/node/node_modules
RUN ls


CMD ["node", "dist/main.js"]