// Importing necessary modules
const net = require('net');
const fs = require('fs');

// Creating a TCP server
const server = net.createServer((socket) => {
    // Handling incoming data from clients
    socket.on("data", (buffer) => {
        // Converting the received buffer to a string
        const requestString = buffer.toString('utf-8');

        // Parsing the request string to extract method, path, and protocol
        const request = parseRequest(requestString);

        // Checking if the request method is 'GET'
        if (request.method === "GET") {
            // Checking if the requested file exists
            if (fs.existsSync(`.${request.path}`)) {
                // File exists, handle accordingly (this is where you might read the file content and send it back)
            }
            // Writing HTTP response - success
            socket.write("HTTP/1.0 200 OK");
        } else {
            // Writing HTTP response - failure (for non-GET requests)
            socket.write("HTTP/1.0 404 Not found");
        }
    });
});

// Function to parse the request string
const parseRequest = (requestString) => {
    // Splitting the request string into method, path, and protocol
    const [method, path, protocol] = requestString.split(" ");

    // Returning an object containing method, path, and protocol
    return {
        method,
        path,
        protocol
    };
};

// Server listening on port 9000
server.listen(9000, () => console.log("Server listening on port 9000"));
