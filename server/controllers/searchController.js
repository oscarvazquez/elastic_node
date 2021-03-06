var express = require('express');
var router = express.Router();
var esService = require('../services/esService');
var Q = require('q');


var html_dir = './public/';
router.get("/home", function (req, res) {

    res.sendfile(html_dir + 'index.html');
});

router.get("/search", function (req, res) {
    var termToSearch = req.query.termToSearch;
    var fieldToSearch=req.query.fieldToSearch;
    console.log("termToSearch=" + termToSearch);
    esService.performSearch(fieldToSearch,termToSearch)
    .then(function (data) {
            res.send("Session: %j", data);
        });
});

module.exports = router;