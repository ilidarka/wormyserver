const express = require("express");
const app = express();

const userRouter = require("./routes/userRouter.js");
const homeRouter = require("./routes/homeRouter.js");

app.set("view engine", "hbs");
app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use("/users", userRouter);
app.use("/", homeRouter);

app.use((req, res, next) => {
    res.status(404).send("Страница не найдена");
});

app.listen(3000, () => {
    console.log("Сервер ожидает подключения...");
});