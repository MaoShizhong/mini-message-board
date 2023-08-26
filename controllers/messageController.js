const Message = require('../models/Message');
const asyncHandler = require('express-async-handler');

exports.message_list = asyncHandler(async (req, res, next) => {
    const messages = await Message.find({}).exec();
    res.render('index', { messageList: messages });
});
