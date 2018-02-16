var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var user = require('./routes/users');


app.use('/users', user);


app.listen(3001);
module.exports = app;
