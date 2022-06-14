FROM node:10.16-alpine
WORKDIR /usr/src/app
COPY ./package.json ./ 
COPY ./package-lock.json ./
RUN npm install --silent
COPY . .
EXPOSE 5000
CMD ["npm","start"]