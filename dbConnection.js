const {Client} = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'wormydb',
    password: 'root',
    port: 5432.
});

client.connect();

client.query('SELECT * FROM users', (err, res) => {
    console.log(res.rows);
    client.end();
});
