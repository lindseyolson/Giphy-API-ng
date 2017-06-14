// requires
var express = require ('express');
var app = express();
var path = require ('path');
var bodyParser = require ('body-parser');

// globals
var port = process.env.PORT || 1616;

// uses
app.use (express.static ('public'));
app.use (bodyParser.urlencoded ({ extended: true}));

// server
