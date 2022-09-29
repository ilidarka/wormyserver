const db = require('../db');

class User {

    async createUser(data) {
        const newUser = await db.query('INSERT INTO users (username, useremail, userpassword) values ($1, $2, $3) RETURNING *', [data.username, data.useremail, data.userpassword]);        
        return newUser;
    };

    async findUser(data) {
        const user = await db.query('SELECT * FROM users WHERE username = $1 AND useremail = $2 AND userpassword = $3', [data.username, data.useremail, data.userpassword]);
        if(user.rows.length != 0) {
            return user.rows[0];
        } else {
            return false;
        }
    };

    async isExists(data) {
        const user = await db.query('SELECT * FROM users WHERE username = $1 OR useremail = $2', [data.username, data.useremail]);
        if(user.rows.length != 0) {
            return true;
        } else {
            return false;
        }
    };

};

module.exports = new User();