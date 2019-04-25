const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db/index.js');
const connection = db.connection;

const app = express();
const port = 5555;

app.use('/', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});