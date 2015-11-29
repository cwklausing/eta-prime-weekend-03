var express = require('express');
var router = express.Router();
var memes = require('../public/data/memes.json');
var fs = require('fs');
var path = require('path');

/* GET memes listing. */
router.get('/memes', function(req, res, next) {
  res.send('Memes', memes);
});

//if you enter localhost:3000/memes/id, the 
//site displays the object of the id#

router.get('/:id?', function(req, res) {
	if (req.params.id !== undefined) {
		res.send(memes[req.params.id]);
	} else {
		res.send(memes);
	}
});

//Adding a new meme
router.post('/', function(req, res, next) {

});

module.exports = router;