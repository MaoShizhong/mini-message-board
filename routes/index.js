const { randomColour, randomPosition } = require('../public/javascripts/randomisers');

const express = require('express');
const router = express.Router();

const messages = [
    {
        text: 'Hi there!',
        author: 'Amando',
        added: new Date(),
        color: randomColour(),
        position: randomPosition(),
    },
    {
        text: 'Hello World!',
        author: 'Charles',
        added: new Date(),
        color: randomColour(),
        position: randomPosition(),
    },
];

/* GET home page. */
router.get('/', (req, res, next) => res.render('index', { messages: messages }));

/* new message */
router.get('/new', (req, res, next) => res.render('form'));

router.post('/new', (req, res, next) => {
    messages.push({
        text: req.body.message,
        author: req.body.name,
        added: new Date(),
        color: randomColour(),
        position: randomPosition(),
    });
    res.redirect('/');
});

module.exports = router;
