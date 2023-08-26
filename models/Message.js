const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    text: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Date, required: true },
    color: {
        backgroundColor: { type: String, required: true },
        fontColor: { type: String, required: true },
    },
    position: {
        top: { type: String, required: true },
        right: { type: String, required: true },
    },
});

module.exports = mongoose.model('Message', MessageSchema);
