// Set up MySQL connection.
var mysql = require("mysql");
var app = require("../app");

if (app.settings.env == 'development'){
  var connection = mysql.createConnection({
  port: 3308,
  host: "localhost",
  user: "root",
  password: "Hunter-Killer-19",
  database: "burgers_db"
  });
}else {
  var connection = mysql.connection(process.env.JAWDB_URL);
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;