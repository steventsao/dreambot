var _ = require('lodash');
var botModel = require('../botModel.js');
var sentiment = require('sentiment');
var natural = require('natural');
var getUserInfo = require('../../utils/botUtils').getUserInfo;

module.exports = function (controller) {
  controller.hears('', 'ambient', function (bot, message) {
    getUserInfo(bot, message.user)
      .then((user) => {
        // add real name to message object
        Object.assign(message, {
          name: user.name,
        });
        // categorizes message by whether it is a question or a statement
        if (isQuestion(message.text)) {
          classifyQuestion(bot, message);
        } else {
          //bot.reply(message, sentiment(message.text).score.toString());
          // saves raw statements
          botModel(message);
        }
        // bot.reply(message,'messaged received');
      });
  });

  var isQuestion = function (message) {
    var array = message.split(' ');
    var questionWords = ['who', 'what', 'where', 'how', 'when', 'why', 'does', 'can', 'is'];
    if (questionWords.indexOf(array[0]) !== -1) {
      return true;
    }
    if (array[array.length - 1][array[array.length - 1].length - 1] === '?') {
      return true;
    }

    return false;
  };

  // TODO: find a way to extract classifier so we aren't loading the json file on each request
  var classifyQuestion = function (bot, message) {
    natural.BayesClassifier.load('./data/classifier.json', null, function (err, classifier) {
      bot.startPrivateConversation(message, function (err, convo) {
        convo.ask('Was your question about ' + classifier.classify(message.text) + '? If you would like to stop recieving these messages, please reply with "stop".', [
          {
            pattern: bot.utterances.yes,
            callback: function (response, convo) {
              convo.say('Noted, thanks for making me smarter!');

              saveMsg(message, classifier.classify(message.text));

              console.log(JSON.stringify(classifier.getClassifications(classifier.classify(message.text))));
              classifier.addDocument(message.text, classifier.classify(message.text));

              classifier.train();
              classifier.save('./data/classifier.json', function (err, results) {
                if (err) {
                  console.error(err);
                }
              });

              console.log(JSON.stringify(classifier.getClassifications(classifier.classify(message.text))));
              convo.next();
            }
          },
          {
            pattern: bot.utterances.no,
            default: true,
            callback: function (response, convo) {
              var sortedArr = classifier.getClassifications(message.text).sort(function (a, b) {
                  return b.value - a.value;
              });

              var topThree = [sortedArr[0].label, sortedArr[1].label, sortedArr[2].label];
              //convo.say(JSON.stringify(sortedArr));
              convo.ask('Hmm, was it about ' + topThree[0] + ', ' + topThree[1] + ' or ' + topThree[2] + '? If you do not see a fitting category, reply with "none"', [
                {
                  pattern: 'none',
                  default: false,
                  callback: function(response, convo){
                    convo.say("Okay, sorry we couldn't categorize your question!");
                    convo.next();
                  },
                },
                {
                  default: true,
                  callback: function(res, convo){
                    convo.next();
                    // saveMsg(message, res.text);
                    convo.say('Recorded your question about ' + res.text + ', thanks for making me smarter!');
                    classifier.addDocument(message.text, res.text);
                    classifier.train();
                    convo.next();
                  }
                }
              ]

              );
              convo.next();
            }
          },
          {
            pattern: 'stop',
            default: false,
            callback: function (response, convo){
              convo.say('You have been added to my do not disturb list, if you would ever like to contribute in the future please DM me with they keyword, "join", thanks!');
              convo.next();
            }
          }
        ]);
      });
      var saveMsg = function (message, label) {
        var classification = {
          classification: label
        };
        var allData = _.extend(message, classification);
        botModel(allData, function () {
          console.log('I am categorizing your question');
        });
      };
    });
  };
};
