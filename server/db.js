const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "041701",
    host: "localhost",
    port: 5432,
    database: "stackudecidedb"
});

module.exports = pool;