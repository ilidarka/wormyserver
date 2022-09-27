const db = require('../db');

class UserController {
    async createUser(req ,res) {
        const {userName, userEmail, userPassword} = req.body;
        const newUser = await db.query('INSERT INTO users (userName, userEmail, userPassword) values ($1, $2, $3) RETURNING *', [userName, userEmail, userPassword]);        
        res.json(newUser.rows[0]);
    };
    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM users');
        res.render('users.hbs', {
            usersList: users.rows 
        });
    };
    async getUserById(req, res) {
        const id = req.params.id;
        const user = await db.query('SELECT * FROM users WHERE id = $1', [id]);
        res.json(user.rows[0]);
    };
    async updateUser(req, res) {
        const {id, username, email, password} = req.body;
        const updatedUser = await db.query('UPDATE users SET username = $1, email = $2, password = $3 RETURNING *',
        [username, email, password]);
        res.json(updatedUser.rows[0]);
    };
    async deleteUser(req, res) {
        const id = req.params.id;
        const user = await db.query('DELETE FROM users WHERE id = $1', [id]);
        res.json(user.rows[0]);
    };
};

module.exports = new UserController();