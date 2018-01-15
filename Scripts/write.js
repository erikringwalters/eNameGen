var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "antiquewhite",
  database: "enamegen_test"
});

con.likeName(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //Insert a record in the "customers" table:
  var sql = "INSERT INTO liked (name, size, race, gender, date) VALUES (" + wpjs.name + ", " + wpjs.size + ", " + wpjs.race + ", " + wpjs.gender + ", "Date.now()")";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

con.dislikeName(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //Insert a record in the "customers" table:
  var sql = "INSERT INTO disliked (name, size, race, gender, date) VALUES (" + wpjs.name + ", " + wpjs.size + ", " + wpjs.race + ", " + wpjs.gender + ", "Date.now()")";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
