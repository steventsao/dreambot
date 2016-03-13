if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}
var Botkit = require('botkit');
var os = require('os');
var port = process.env.PORT || 3000
var botModel = require('./botModel.js');
var express = require('express');
var sentiment = require('sentiment');
var app = express();
var natural = require('natural');
var _ = require('lodash');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});

var controller = Botkit.slackbot({
    debug: true,
});

var bot = controller.spawn({
    token: process.env.token
}).startRTM();




controller.hears('', 'ambient', function(bot, message) {
    if(isQuestion(message.text)){
      bot.reply(message, 'question');
      // bot.startPrivateConversation(message, function(err, conversation) {
      //   conversation.say('You asked me a question');
      // });
      classifyQuestion(bot, message);
    }
    console.log(message.text);
    console.log(message);
    bot.reply(message, sentiment(message.text).score.toString());
    botModel(message);
    // bot.reply(message,'messaged received');
})

//for cody <3
controller.hears(['shutdown'],'direct_message,direct_mention,mention',function(bot, message) {

    bot.startConversation(message,function(err, convo) {

        convo.ask('Are you sure you want me to shutdown?',[
            {
                pattern: bot.utterances.yes,
                callback: function(response, convo) {
                    convo.say('Bye!');
                    convo.next();
                    setTimeout(function() {
                        process.exit();
                    },3000);
                }
            },
        {
            pattern: bot.utterances.no,
            default: true,
            callback: function(response, convo) {
                convo.say('*Phew!*');
                convo.next();
            }
        }
        ]);
    });
});


controller.hears(['uptime','identify yourself','who are you','what is your name'],'direct_message,direct_mention,mention',function(bot, message) {

    var hostname = os.hostname();
    var uptime = formatUptime(process.uptime());

    bot.reply(message,':robot_face: I am a bot named <@' + bot.identity.name + '>. I have been running for ' + uptime + ' on ' + hostname + '.');

});

function formatUptime(uptime) {
    var unit = 'second';
    if (uptime > 60) {
        uptime = uptime / 60;
        unit = 'minute';
    }
    if (uptime > 60) {
        uptime = uptime / 60;
        unit = 'hour';
    }
    if (uptime != 1) {
        unit = unit + 's';
    }

    uptime = uptime + ' ' + unit;
    return uptime;
}


var isQuestion = function(message){
    var array = message.split(' ');
    var questionWords = ['who', 'what', 'where', 'when', 'how', 'when', 'why', 'does', 'can', 'is'];
    if(questionWords.indexOf(array[0]) !== -1){
        return true;
    }
    if(array[array.length - 1][array[array.length - 1].length - 1] === '?'){
        return true;
    }

    return false;
}


//TODO: find a way to extract classifier so we aren't loading the json file on each request

var classifyQuestion = function(bot, message){


    natural.BayesClassifier.load('./server/classifier.json', null, function(err, classifier) {
  
      bot.startPrivateConversation(message,function(err, convo) {

          convo.ask('Was your question about ' + classifier.classify(message.text) + '?',[
              {
                  pattern: bot.utterances.yes,
                  callback: function(response, convo) {
                      convo.say('Noted');
                      
                      console.log(JSON.stringify(classifier.getClassifications(classifier.classify(message.text))));
                      classifier.addDocument(message.text, classifier.classify(message.text));

                      classifier.train();
                      classifier.save('./server/classifier.json', function(err, results) {
                        if(err) console.error(err);
                      });
                      console.log(JSON.stringify(classifier.getClassifications(classifier.classify(message.text))));
                      convo.next();
                  }
              },
          {
              pattern: bot.utterances.no,
              default: true,
              callback: function(response, convo) {
                var sortedArr = classifier.getClassifications(message.text).sort(function (a, b) {
                    return b.value - a.value;
                  });

                var topThree = [sortedArr[0].label, sortedArr[1].label, sortedArr[2].label];


                  convo.say(JSON.stringify(sortedArr));
                  convo.ask('Select one of the topics listed: ' + topThree.join(', ') + '?', function(res, convo) {
                    convo.next();

                    convo.say('Recorded your ' + res.text + ' question.');
                    classifier.addDocument(message.text, res.text);
                    classifier.train();
                    convo.next();
                  });
                  convo.next();
              }
          }
          ]);
      });

      
      var classification = {
        classification: classifier.classify(message.text)
      }


      var allData = _.extend(message, classification);
      botModel(allData, function(){
        console.log('I am categorizing your question');
      })
    });
}
