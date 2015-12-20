var express = require('express'),
    app     = express();

var myName = "SQUASH";

var myAlbums = [
{title: 'Cupid Deluxe',
artist: 'Blood Orange'},
{title: 'Ten',
artist: 'Pearl Jam'},
{title: 'In Utero',
artist: 'Nirvana'}
];

//Use Handlebars as templating engine
app.set('view engine', 'hbs');
 
app.get('/', function(req, res){
  res.render('index', {name: myName});
});


//Render albums
app.get('/albums', function(req, res){
  // res.send('root path');
  res.render('albums', {albums: myAlbums});
});



//Show all posts (READ)
app.get('/posts', function(req, res){
  res.send('Posts index here');
});


//Render new form (CREATE)
app.get('/posts/new', function(req, res){

});


//Save data to database (CREATE)
app.post('/posts/new', function(req, res){

});




//In production, use the production port; othrwise, use 3000 (for development)

app.listen(process.env.PORT || 3000, function(){
  console.log("Listening at port 3000 (http://localhost:3000/). woohah!");
});