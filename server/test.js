var natural = require('natural');

  natural.BayesClassifier.load('classifier.json', null, function(err, classifier) {
      console.log(classifier);
      console.log("***************************************");
  //   var classification = {
  //     classification: classifier.classify(message.text)
  //   }
  //   var allData = _.extend(message, classification);
  //   botModel(allData, function(){
  //     console.log('I am categorizing your question');
  //   })
  });
