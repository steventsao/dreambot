// This file spawns a new bot, then exports the controller for use elsewhere

import Botkit from 'botkit';

const controller = Botkit.slackbot({
    debug: true,
});

controller.spawn({
    token: process.env.token
}).startRTM();

export default controller;
