# Base image
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Build the Vite app
RUN npm run build

# Expose the port the app runs on
EXPOSE 8080

# Command to run the application
CMD [ "node", "server.js" ]
