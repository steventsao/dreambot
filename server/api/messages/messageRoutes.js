var express = require('express');

var app = express.Router();

var messageController = require('./messageController');

app.use('/byHour', messageController.getMessagesByHour);
app.use('/byDayOfWeek', messageController.getMessagesByDayOfWeek);
app.use('/', messageController.getMessages);

module.exports = app;
