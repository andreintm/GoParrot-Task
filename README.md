# GoParrot Backend API 

## Local server link
URL: http://localhost:3000

## Stack of technologies

MongoDB: 3.6.17

Node: 13.10

### System requirements
<ul>
    <li>MacOS (has not been tested on Windows or Linux)</li>
    <li><a href="https://docs.docker.com/install/linux/docker-ce/ubuntu/ target="_blank">Docker</a> version 18 or newer </li>
    <li><a href="https://docs.docker.com/compose/install/#install-compose" target="_blank">Docker compose</a> version 1.23 or newer</li>
    <li><code>make</code> tool</li>
</ul>

### Build and Run
Run `make build` or `docker-compose build` to build containers

Run `make up` to start containers

Run `make logs` to see logs

Run `make stop` to stop containers

Run `make sh` to go inside docker container of the application

Navigate to `http://localhost:3000/api` for documentation or you can import postman files (attached to project).

### Build and Run in one command 
Run `make build up logs`
