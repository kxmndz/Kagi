var express = require('express');
const {request} = require("express");
var router = express.Router();

const { books, users, rentals, authors } = require('../globals');

router.get('/', function(req, res, next) {
    let user = JSON.parse(req.cookies['user']);

    if (!user || user === 'no') {
        res.render('pages/not-authenticated');
    } else {
        res.render('pages/user-info', {user})
    }
});
router.get('/user-info', function(req, res, next) {
    let user = JSON.parse(req.cookies['user']);

    if (!user || user === 'no') {
        res.render('pages/not-authenticated');
    } else {
        res.render('pages/user-info', {user});
    }
});

router.get('/all-books', function(req, res, next) {
    let user = JSON.parse(req.cookies['user']);
    if (!user?.type === 'admin') {
        res.render('pages/not-authenticated');
    } else {
        res.render('pages/admin/all-books', {user, books});
    }
});
router.get('/add-book', function(req, res, next) {
    let user = JSON.parse(req.cookies['user']);
    if (!user?.type === 'admin') {
        res.render('pages/not-authenticated');
    } else {
        res.render('pages/admin/new-book', {user, books});
    }
});
router.get('/book/:id', function (req, res, next) {
    let user = JSON.parse(req.cookies['user']);

    if (!user || user === 'no') {
        res.render('pages/not-authenticated');
    } else {
        if (books.has(req.params.id))
            res.render('pages/book', {user, book: books.get(req.params['id'])});
        else
            res.render('pages/404')
    }
});
router.get('/delete-book', function(req, res, next) {
    let user = JSON.parse(req.cookies['user']);
    if (!user?.type === 'admin') {
        res.render('pages/not-authenticated');
    } else {
        res.render('pages/admin/delete-book', {user, books});
    }
});

router.get('/all-users', function(req, res, next) {
    let user = JSON.parse(req.cookies['user']);
    if (!user?.type === 'admin') {
        res.render('pages/not-authenticated');
    } else {
        res.render('pages/admin/all-users', {user, users});
    }
});
router.get('/add-user', function(req, res, next) {
    let user = JSON.parse(req.cookies['user']);
    if (!user?.type === 'admin') {
        res.render('pages/not-authenticated');
    } else {
        res.render('pages/admin/new-user', {user, users});
    }
});
router.get('/user/:id', function (req, res, next) {
    let user = JSON.parse(req.cookies['user']);
    let target = Array.from(users.values()).filter(user => user.id.toString() === req.params.id)[0];
    if (!user?.type === 'admin') {
        res.render('pages/not-authenticated');
    } else {
        res.render('pages/user', {user, target});
    }
});
router.get('/delete-user', function(req, res, next) {
    let user = JSON.parse(req.cookies['user']);
    if (!user?.type === 'admin') {
        res.render('pages/not-authenticated');
    } else {
        res.render('pages/admin/delete-user', {user, users});
    }
});

router.get('/all-authors', function(req, res, next) {
    let user = JSON.parse(req.cookies['user']);
    if (!user?.type === 'admin') {
        res.render('pages/not-authenticated');
    } else {
        res.render('pages/admin/all-authors', {user, authors, books});
    }
});
router.get('/add-author', function(req, res, next) {
    let user = JSON.parse(req.cookies['user']);
    if (!user?.type === 'admin') {
        res.render('pages/not-authenticated');
    } else {
        res.render('pages/admin/new-author', {user, authors, books});
    }
});
router.get('/author/:id', function (req, res, next) {
    let user = JSON.parse(req.cookies['user']);

    if (!user || user === 'no') {
        res.render('pages/not-authenticated');
    } else {
        res.render('pages/author', {user, books, author: authors.get(req.params.id)})
    }
});
router.get('/delete-author', function(req, res, next) {
    let user = JSON.parse(req.cookies['user']);
    if (!user?.type === 'admin') {
        res.render('pages/not-authenticated');
    } else {
        res.render('pages/admin/delete-author', {user, authors, books});
    }
});

router.get('/all-rentals', function(req, res, next) {
    let user = JSON.parse(req.cookies['user']);
    if (!user?.type === 'admin') {
        res.render('pages/not-authenticated');
    } else {
        res.render('pages/admin/all-rentals', {user, books, rentals});
    }
});
router.get('/add-rental', function(req, res, next) {
    let user = JSON.parse(req.cookies['user']);
    if (!user?.type === 'admin') {
        res.render('pages/not-authenticated');
    } else {
        res.render('pages/admin/new-rental', {user, rentals, books});
    }
});
router.get('/rentals/:userId', function (req, res, next) {
    let target = Array.from(users.values()).filter(user => user.id.toString() === req.params.id)[0];
    res.render('pages/rental', {target, books, rentals });
});
router.get('/delete-rental', function(req, res, next) {
    let user = JSON.parse(req.cookies['user']);
    if (!user?.type === 'admin') {
        res.render('pages/not-authenticated');
    } else {
        res.render('pages/admin/delete-rental', {user, rentals, books});
    }
});


router.get('/my-rentals', function(req, res, next) {
    let user = JSON.parse(req.cookies['user']);

    if (!user || user === 'no') {
        res.render('pages/not-authenticated');
    } else {
        let user = JSON.parse(req.cookies['user']);
        res.render('pages/rental', {user, target: user, books, rentals });
    }
})

module.exports = router;
