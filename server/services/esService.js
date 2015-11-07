var index = "shakespeare";
var type = "line";
elasticsearch = require('elasticsearch');
var Q = require('q');


var client = new elasticsearch.Client({
  host: 'localhost:9200'
});

function performSearch(req, res) {
	var term = req.query.termToSearch;
	var field = req.query.fieldToSearch;
    if (field === undefined) {
        field = "_all";
    }
    var deferred = Q.defer();

    client.search({
    	index: 'elastic_course',
    	type: 'book',
    	body: {
    		query: {
	    		filtered: {
		    		query: {
		    			match: {
		    				synopsis: term
		    			}
		    		}
		    	}
		    }
    	}
    }).then(function (resp) {
	    var hits = resp.hits.hits;
	    console.log('hits');
	    console.log(hits);
	    res.json(hits);
	}, function (err) {
	    console.trace(err.message);
	});
}

exports.performSearch = performSearch;
