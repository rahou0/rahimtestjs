var mysql = require("mysql2");
var connection = mysql.createConnection({
  host: "localhost",
  user: "rahim",
  password: "Rahim2016-",
  database: "doordz",
});

module.exports = { connection };
