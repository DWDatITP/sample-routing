var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.get('/', function(req, res) {
  res.send('Try /my-name-is/:your-name OR /search?word=__word__ OR /color/:color1/color/:color2');
});

app.get('/my-name-is/:the_name', function(req, res) {
  var name = req.params.the_name;
  res.send('Your name is: ' + name);
});

app.get('/search', function(req, res) {
  var word = req.query.word;
  res.send('You searched for the word: ' + word);
});

app.get('/color/:color1/color/:color2', function(req, res) {
  var color1 = req.params.color1;
  var color2 = req.params.color2;
  res.send('I see colors: ' + color1 + ' and ' + color2);
});

app.listen(port, function(){
  console.log('listening on ',port);
});
