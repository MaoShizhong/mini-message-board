const express = require('express');
const router = express.Router();

const { randomColour, randomPosition } = require('../public/javascripts/randomisers');
const messageController = require('../controllers/messageController');
const Message = require('../models/Message');

/* GET home page. */
router.get('/', messageController.message_list);

/* new message */
router.get('/new', (req, res) => res.render('form'));

router.post('/new', async (req, res) => {
    req.body;
    await Message.create({
        text: req.body.message,
        author: req.body.name,
        date: new Date(),
        color: randomColour(),
        position: randomPosition(),
    });
    res.redirect('/');
});

module.exports = router;
