const http = require("http");
const fs = require("fs");

const port = 3000;
const hostName = "127.0.0.1";

const server = http.createServer((req, res) => {

    if(req.url === "/user") {

        const buffer = [];

        for await (const chunk) {

        }
        
    } else {
        fs.readFile("index.html", (error, data) => res.end(data));
    }

});

server.listen(port, hostName, () => {
    console.log((`Server is listening on http://${hostName}:${port}`));
});