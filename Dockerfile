# use Node.js version 9
FROM node:9

# create app folder in the container (not the host)
RUN mkdir -p /app       

# sets the working directory inside the container (where RUN/CMD commands will be executed)
WORKDIR /app

# copies everything from the current directory into the /app folder inside the container (COPY <host_dir> <container_dir>)
COPY . /app             

# runs "npm install" command inside the container
RUN ["npm", "install"] 