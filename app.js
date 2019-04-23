const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

//Import Server.js functionality
const ls = require('./server');

//start listen server
ls.startServer;

//response handler 
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    const result = {
        potato: ["boiled","fried","mashed","cooked"]
    }

    //convert info to json string
    res.end(JSON.stringify(result));
});

//Start listen server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})
