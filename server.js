// requires
var express = require ('express');
var app = express();
var path = require ('path');
var bodyParser = require ('body-parser');
var index = require ('./routes/index');

// globals
var port = process.env.PORT || 1616;

// uses
app.use (express.static ('public'));
app.use (bodyParser.urlencoded ({ extended: true}));
app.use ('/', index);

// server
app.listen  (port, function() {
  console.log('server listening on port:', port);
});
