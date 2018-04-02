const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  //res.sendFile(__dirname + '/index.html');
  //res.send('This is the homepage');
  res.render('index');
});

app.get('/contact', function(req, res){
  //res.sendFile(__dirname + '/contact.html');
  //res.send('This is the contactpage');
  res.render('contact');
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
