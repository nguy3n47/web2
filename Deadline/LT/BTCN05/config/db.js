const Pool = require('pg').Pool;
 
const pool = new Pool({
    user: 'ooufxkitlbwkyo',
    password: '7963bbd7587e4b32fa8a69b21c700fdbc7ba6348fe893c2bb46dba633cc32c77',
    database: 'd7bq5n3nus1ke9',
    host: 'ec2-34-225-103-117.compute-1.amazonaws.com',
    port: '5432',
    connectionString: 'postgres://ooufxkitlbwkyo:7963bbd7587e4b32fa8a69b21c700fdbc7ba6348fe893c2bb46dba633cc32c77@ec2-34-225-103-117.compute-1.amazonaws.com:5432/d7bq5n3nus1ke9',
    ssl: { rejectUnauthorized: false }
})

module.exports = pool;