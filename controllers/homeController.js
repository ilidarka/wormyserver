const userModel = require('../models/user');

class homeController {
    async index(req, res) {
        res.render('main.hbs');
    };
    async registration(req, res) {
        res.render('registration.hbs');
    };
    async registerUser(req ,res) {
        const candidate = await userModel.isExists(req.body);
        if(candidate) {
            return res.status(400).json({message: "Такой пользователь уже существует"});
        }
        const newUser = await userModel.createUser(req.body);
        return res.status(200).json(newUser.rows[0]);
    };
    async signIn(req, res) {
        res.render('signin.hbs');
    };
    async authorizeUser(req, res) {
        const candidate = await userModel.findUser(req.body);
        if(candidate) {
            return res.status(200).json(candidate);
        }
        return res.status(400).json({message: "Такого пользователя нет"});
    };
};

module.exports = new homeController();