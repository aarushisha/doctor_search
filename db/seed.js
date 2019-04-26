const mysql = require('mysql');
const connection = require('./index.js');

const path = __dirname + '/sample_data.csv';


// //load data into database from mockdata file
connection.query('LOAD DATA LOCAL INFILE "'+ path +'" INTO TABLE doctor_info FIELDS TERMINATED BY "," LINES TERMINATED BY "\n" IGNORE 1 ROWS (id , first_name, middle_name, last_name, specialty, specialty2, address1, address2, city, state, zip, county, Phone, score )', function(err, data) {
  if (err) {
    console.log('ERROR', err)
  } else {
    console.log(null, data)
  }
});
