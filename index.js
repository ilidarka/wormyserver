const http = require("http");
const fs = require("fs");

const port = 3000;
const hostName = "127.0.0.1";

const server = http.createServer(async (req, res) => {

    if(req.url === "/") {

        const buffers = [];

        for await (const chunk of req) {
            buffers.push(chunk);
        }

        const user = JSON.parse(Buffer.concat(buffers).toString());
        console.log(user);
        res.end("data recieved");

    } else {
        fs.readFile("index.html", (err, data) => res.end(data));
    }

});

server.listen(port, hostName, () => {
    console.log((`Server is listening on http://${hostName}:${port}`));
});