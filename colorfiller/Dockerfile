# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app
# RUN npm run build

# Expose a port (usually 80 for HTTP)
EXPOSE 80

# Start the React app when the container runs
CMD ["npm", "start"]
