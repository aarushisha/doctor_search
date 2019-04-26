const express = require('express');
var http = require('http');
var path = require('path');
const bodyParser = require('body-parser');
const connection = require('./db/index.js');


const app = express();
const port = 5555;

app.use(express.static(__dirname + '/client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/allDoctors', function(req, res) {
  connection.query('SELECT * FROM doctor_info ORDER BY specialty ASC', function(error, results) {
    if(error) {
      console.log(error);
    } else {
      res.send(results);
    }
  })
})

app.get('/id/:id', function(req, res) {
  var arr = req.url.split(':');
  var id = parseInt(arr[1]);
  connection.query(`SELECT * from doctor_INFO WHERE id=${id}`, function(error, results) {
    if (error) {
      console.log(error);
    } else {
      res.send(results);
    }
  })
})

app.listen(process.env.PORT || port, function() {
  console.log(`listening on port ${port}`);
});

