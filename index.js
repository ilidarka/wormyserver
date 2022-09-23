const http = require("http");
const fs = require("fs");

const port = 3000;
const hostName = "127.0.0.1";

const server = http.createServer((req, res) => {
    fs.readFile("index.html", "utf8", (err, data) => {
        let userName = "name";
        let userEmail = "email";

        data = data.replace("{userName}", userName).replace("{userEmail}", userEmail);
        res.end(data);
    });
});

server.listen(port, hostName, () => {
    console.log((`Server is listening on http://${hostName}:${port}`));
});