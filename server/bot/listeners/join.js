var getUserInfo = require('../../utils/botUtils').getUserInfo;
var botModel = require('../botModel.js');

module.exports = function (controller) {
  controller.hears(['join'], 'direct_message',function(bot, message) {
    getUserInfo(bot, message.user)
      .then((user) => {
        botModel.subscribeUser(user);
    });
    bot.startConversation(message, function (err, convo) {
      convo.say('You have been resubscribed, thanks!')
    });
  });
};
