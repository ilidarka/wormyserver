const db = require('../db');

class homeController {
    async index(req, res) {
        res.render('main.hbs');
    };
    async registration(req, res) {
        res.render('registration.hbs');
    };
    async createUser(req ,res) {
        const {username, useremail, userpassword} = req.body;
        const newUser = await db.query('INSERT INTO users (username, useremail, userpassword) values ($1, $2, $3) RETURNING *', [username, useremail, userpassword]);        
    };
    async signIn(req, res) {
        res.render('signin.hbs');
    };
    async authoriseUser(req, res) {
        const {username, userpassword} = req.body;
        const authorizedUser = await db.query('SELECT * FROM users WHERE username = $1 AND userpassword = $2', [username, userpassword]);
        res.json(authorizedUser.rows);
    };
};

module.exports = new homeController();