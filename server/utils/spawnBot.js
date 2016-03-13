var Botkit = require('botkit');

var controller = Botkit.slackbot({
    debug: true,
});

controller.spawn({
    token: process.env.token
}).startRTM();

module.exports = controller;
