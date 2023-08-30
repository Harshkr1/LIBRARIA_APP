# Use the official Node.js image as the base
FROM node:14

# Set the working directory within the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install project dependencies (both regular and dev)
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose the port on which your Node.js app is running
EXPOSE 3000

# Define the command to start your Node.js app using nodemon
CMD ["npm", "run", "dev"]
