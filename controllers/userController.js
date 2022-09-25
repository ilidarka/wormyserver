const User = require("../models/user.js");

exports.addUser = (req, res) => {
    res.render("registration.hbs");
};

exports.getUsers = (req, res) => {
    res.render("users.hbs", {
        users: User.getAllUsers
    })
};

exports.postUser = (req, res) => {
    const userName = req.body.userName;
    const userEmail = req.body.userEmail;
    const userPassword = req.body.userPassword;
    res.redirect("/users");
}