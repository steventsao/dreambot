// This file spawns a new bot, then exports the controller for use elsewhere

var Botkit = require('botkit');

var controller = Botkit.slackbot({
    debug: true,
});

controller.spawn({
    token: process.env.token
}).startRTM();

module.exports = controller;
