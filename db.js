const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'hzbscaqtevepky',
    host: 'ec2-34-241-90-235.eu-west-1.compute.amazonaws.com',
    database: 'd81jcf9f4114ml',
    password: '73aa42e519d448f9daf8326a503a088ce4bb4b8c5081db455f311ee47d5affbf',
    port: 5432,
    ssl: { rejectUnauthorized: false }
});

module.exports = pool;