FROM node:12-alpine
RUN echo "Starting Docker"
RUN apk add --no-cache python g++ make
WORKDIR /app
COPY . .
RUN echo "Docker Created"