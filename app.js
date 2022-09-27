const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);

const userRouter = require("./routes/userRouter.js");
const homeRouter = require("./routes/homeRouter.js");

app.set('view engine', 'hbs');
app.set("views");

app.use("/users", userRouter);
app.use("/", homeRouter);

app.use((req, res, next) => {
    res.status(404).send("Страница не найдена");
});

io.on('connection', (socket) => {
    console.log("io: user connected ");
    socket.on('disconnect', () => {
        console.log("io: user disconnected");
    });
    socket.on('clientMessage', (msg) => {
        console.log("message: " + msg);
        io.emit("clientMessage", msg);
    });
});

server.listen(3000, () => {
    console.log("Сервер ожидает подключения...");
});