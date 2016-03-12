var wit = require('node-wit');
var ACCESS_TOKEN = require('./config.js').WITAI;
// TODO: get your API key get https://wit.ai/

module.exports = function(message, cb) {
  wit.captureTextIntent(ACCESS_TOKEN, message, function (err, res) {
    console.log("Response from Wit for text input: ");
    if (err) console.log("Error: ", err);
    console.log(JSON.stringify(res, null, " "));
    cb(res);
  });
  
}
