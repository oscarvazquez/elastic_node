var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var app = express();

app.use(express.static(path.join(__dirname, './client')));
app.use('/node_modules',express.static(__dirname + '/node_modules'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(require('less-middleware')(path.join(__dirname, 'public')));

app.set('views', __dirname + '/client');
app.set("view engine", 'ejs');

require('./server/routes.js')(app);

var server = app.listen(8000, function() {
	console.log("listening on port 8000");
})