var esService = require('./services/esService');
var Q = require('q');

module.exports = function(app){
	app.get('/', function(req, res){
		res.render("index.ejs");
	}),
	app.get("/search", function (req, res) {
	    esService.performSearch(req, res)
	});
}