var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
    res.render('pages/login');
});

router.get('/signup', function(req, res, next) {
    res.render('pages/signup');
});

module.exports = router;
