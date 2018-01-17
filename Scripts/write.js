// var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "antiquewhite",
  database: "enamegen_test"
});

date(function() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  var today = dd + '/' + mm + '/' + yyyy;
  return today;
  document.getElementById("DATE").value = today;
});

con.likeName(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //Insert a record in the "customers" table:
  var date = date();
  var sql = "INSERT INTO liked (name, size, race, gender, date) VALUES (" + wpjs.name + ", " + wpjs.size + ", " + wpjs.race + ", " + wpjs.gender + ", " + date + ")";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

con.dislikeName(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //Insert a record in the "customers" table:
  var date = date();
  var sql = "INSERT INTO disliked (name, size, race, gender, date) VALUES (" + wpjs.name + ", " + wpjs.size + ", " + wpjs.race + ", " + wpjs.gender + ", " + date + ")";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
