var express = require('express');
var router = express.Router();
var memes = require('../public/data/memes.json');


/* GET memes listing. */
router.get('/', function(req, res, next) {
  res.render('memes', {title: "Memes!", memes: memes});
});

module.exports = router;


//if you enter localhost:3000/memes/id, the 
//site displays the object of the id#

router.get('/:id?', function(req, res) {
	if (req.params.id !== undefined) {
		res.render('memes', {memes: memes});
	} else {
		res.send(memes);
	}
});

module.exports = router;