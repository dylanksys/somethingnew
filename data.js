var router = require('express').Router();

// Change API methods and endpoint methods to fit your needs

router.get('/API/items', function(req, res) {
	res.send('Path: /API/items');
};

router.get('/API/users', function(req, res) {
	res.send('Path: /API/users');
};

module.exports = router;
