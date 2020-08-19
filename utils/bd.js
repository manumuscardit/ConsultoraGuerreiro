const mysql= require('mysql');
const util= require('util');
const pool= mysql.createPool({

  host: process.env.HOST_DB, // host
  port: process.env.PORT_DB, // puerto por default
  user: process.env.USER_DB, // usuario db
  password: process.env.PASSWORD_DB, // password db
  database: process.env.DATABASE,
}) // Referencia de conexión
pool.query = util.promisify(pool.query); // Para que las consultas soporten promesas async await
module.exports = pool;