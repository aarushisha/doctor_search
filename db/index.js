const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
});

connection.query('CREATE DATABASE IF NOT EXISTS doctors', (error, results) => {
  if (error) {
    console.log(error);
  } else {
    console.log('created database doctors');
  }
});

connection.query('USE doctors', (error, results) => {
  if (error) {
    console.log(error);
  } else {
    console.log('using database doctors');
  }
});

connection.query('CREATE TABLE IF NOT EXISTS doctor_info ( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, first_name CHAR(30) NOT NULL, middle_name CHAR(30), last_name CHAR(30) NOT NULL, specialty CHAR(60) NOT NULL, specialty2 CHAR(60), address1 CHAR(30) NOT NULL, address2 CHAR(30), city CHAR(15), state CHAR(2), zip CHAR(15), county CHAR(15), Phone CHAR(20), score INT)', function(err, data) {
  if (err) {
    console.log('ERROR', err)
  } else {
    console.log(null, data)
  }
});

module.exports = connection;
