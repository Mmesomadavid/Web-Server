# Simple Node.js TCP Web Server

This project sets up a basic TCP web server using Node.js. It listens for incoming connections and handles HTTP-like requests, responding based on the method and requested file existence.

### Features
#### TCP Server: Utilizes Node.js net module to create a TCP server.
#### HTTP-Like Request Handling: Parses incoming data to extract method, path, and protocol.
#### File Existence Check: Verifies the existence of requested files within the server directory.


## Requirements
Node.js installed on your machine.


## Usage
Clone this repository to your local machine.
Navigate to the project directory in the terminal.
Run npm install to install necessary dependencies.
Start the server by running node server.js.
Connect to the server using a TCP client.
Configuration
Port: The server listens on port 9000 by default. You can change this in the server.listen() method in server.js.
File Handling: Modify the logic in if (fs.existsSync(.${request.path})) to handle requested file responses.
![Www Concept Illustration _ Vecteur Gratuite](https://github.com/Mmesomadavid/Web-Server/assets/108488301/70a67a6b-2501-4d08-9fe8-e8bf73d5a358)
