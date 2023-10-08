FROM node:18-alpine
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN export $(env)
RUN npm i
RUN npm run build
EXPOSE 5000
CMD npm run start
