var express = require('express');

var app = express.Router();

var messageController = require('./messageController');

app.get('/search?:id', messageController.getSearchResults);
app.use('/byHour', messageController.getMessagesByHour);
app.use('/byDayOfWeek', messageController.getMessagesByDayOfWeek);
app.use('/', messageController.getMessages);

module.exports = app;
