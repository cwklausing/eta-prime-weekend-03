var express = require('express');
var router = express.Router();
var memes = require('../data/memes.json');
var fs = require('fs');
var path = require('path');

/* GET memes listing. */
router.get('/', function(req, res, next) {
  if (req.params.id !== undefined) {
  	res.send(memes[req.params.id]);
  } else {
  	res.send(memes);
  }
});

module.exports = router;
