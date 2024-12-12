var express = require('express');
const {request} = require("express");
var router = express.Router();

const { books, users, authors, rentals } = require('../globals');
const Book = require("../models/Book");

router.post('/login', function(req, res, next) {
    console.log('login attempt: ' + req.body['username'] + ' :: ' + req.body['password']);
    if (users.has(req.body['username'])) {
        let user = users.get(req.body['username']);
        if (user.password !== req.body['password']) {
            res.render('pages/login-fail');
        } else {
            res.cookie('user', JSON.stringify(user));
            res.redirect('/app');
        }
    } else {
        res.render('pages/login-fail');
    }
});

router.post('/signup', function(req, res, next) {
    if (users.has(req.body['username'])) {
        res.render('pages/signup-fail');
    } else {
        const user = {
            type: 'user',
            id: users.size + 1,
            username: req.body['username'],
            password: req.body['password'],
            email: req.body.email,
            birthdate: req.body.birthdate,
            name: req.body.name,
            phone: req.body.phone,
            rentals: []
        }
        users.set(req.body['username'], user);
        res.render('pages/signup-success');
    }
});

router.get('/logout', function(req, res, next) {
    res.cookie('user', 'no');
    res.redirect('/auth/login');
});

router.post('/new-book', function(req, res, next) {
    let {id, origTitle, localTitle, author, year, month, day, status, ageRange, synopsis} = req.body;
    books.set(id.toString(), new Book(
        id, origTitle, localTitle, author, `${year}-${month}-${day}`, ageRange, status, synopsis
    ));

    res.redirect('/app/all-books');
});
router.post('/delete-book', function(req, res, next) {
    let {target} = req.body;

    if (books.has(target)) {
        books.delete(target);
        res.redirect('/app/all-books');
    } else {
        res.render('pages/delete-fail')
    }
});

router.post('/new-author', function(req, res, next) {
    let {id, name} = req.body;
    authors.set(id.toString(), new Author(
        id, name
    ));

    res.redirect('/app/all-authors');
});
router.post('/delete-author', function(req, res, next) {
    let {target} = req.body;

    if (authors.has(target)) {
        authors.delete(target);
        res.redirect('/app/all-authors');
    } else {
        res.render('pages/delete-fail');
    }
});

router.post('/new-user', function(req, res, next) {
    let {username, password, name, birthdate, email, phone } = req.body;
    if (users.has(username)) {
        let id = users.get(username).id;
        users.set(username, {username, password, name, birthdate, email, phone, id });
    } else {
        const newUser = {
            type: 'user',
            id: (id === '') ? users.size + 1 : id,
            username: req.body['username'],
            password: req.body['password'],
            email: req.body.email,
            birthdate: req.body.birthdate,
            name: req.body.name,
            phone: req.body.phone,
        }
        users.set(req.body['username'], newUser);
        res.redirect('/app/all-users');
    }

    res.redirect('/app/all-users');
});
router.post('/delete-user', function(req, res, next) {
    let {target} = req.body;

    let targetUser = Array.from(users.values()).filter(u => u.id.toString() === target);

    console.log({target, targetUser});

    if (targetUser.length > 0) {
        users.delete(targetUser[0].username);
        res.redirect('/app/all-users');
    } else {
        res.render('pages/delete-fail');
    }
});

router.post('/new-rental', function (req, res, next) {
    let { userId, bookId, due } = req.body;
    if (rentals.has(userId)) {
        rentals.get(userId).push({bookId, dueDate })
    } else {
        rentals.set(userId, [
            {bookId, dueDate}
        ]);
    }
});
module.exports = router;
router.post('/delete-rental', function (req, res, next) {
    let [uId, bId] = req.body.target.split('-');

    if (rentals.has(uId)) {
        let rents = rentals.get(uId);
        for (i in rents) {
            if (rents[i].bookId.toString() === bId) {
                let r = rents.splice(i, 1);
                res.redirect('/app/all-rentals')
            }
        }
    } else {
        res.render('pages/delete-fail');
    }
});


module.exports = router;
