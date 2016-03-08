var express = require('express');
var router = express.Router();
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
/*
 * GET Alphabet.
 */
router.get('/all', function(req, res) {
		res.json({result:alphabet});
});

router.get('/charat/:number', function(req, res) {
		res.json({result:alphabet.split('')[req.params.number+1]});
});

module.exports = router;
