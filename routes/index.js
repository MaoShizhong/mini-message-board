const express = require('express');
const router = express.Router();

const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: new Date(),
    },
    {
        text: 'Hello World!',
        user: 'Charles',
        added: new Date(),
    },
];

/* GET home page. */
router.get('/', (req, res, next) => res.render('index', { messages: messages }));

/* new message */
router.get('/new', (req, res, next) => res.render('form'));

router.post('/new', (req, res, next) => {
    messages.push({
        text: req.body.message,
        user: req.body.name,
        added: new Date(),
    });
    res.redirect('/');
});

module.exports = router;
