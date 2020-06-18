# Select image from dockerhub 
FROM node:latest

# Set working directory
WORKDIR /usr/src/covid-tracker

# Copy files from host to location within the image
COPY . .

# Run command inside the image
RUN npm install

# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 3000

# Run the specified command within the container. Specifying some metadata in your image that describes how to run a container based on this image
CMD [ "npm", "start" ]