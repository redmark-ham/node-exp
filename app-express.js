const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// POST /login gets urlencoded bodies
app.post('/contact', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  res.render('contact-success', {data: req.body});
});

app.get('/', function(req, res){
  //res.sendFile(__dirname + '/index.html');
  //res.send('This is the homepage');
  res.render('index');
});

app.get('/contact', function(req, res){
  //res.sendFile(__dirname + '/contact.html');
  //res.send('This is the contactpage');
  res.render('contact', {qs: req.query});
});

app.get('/profile/:name', function(req, res){
  const data = {
    age: 29,
    job: 'ninja',
    hobbies: ['flying', 'fighting', 'fishing']
  };
  res.render('profile', {person: req.params.name, data: data});
});


app.listen(3000, '127.0.0.1');
