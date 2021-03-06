var express = require('express'),
    app     = express();

//You need to REQUIRE handlebars in order to use it for JSON requests (then refer to line 19-20)
var hbs     = require('hbs');

var myName  = "V-SQUASH";

// seed data for albums
var myAlbums = [
{title: 'Metallica',
artist: 'Black Album'},
{title: 'Ten',
artist: 'Pearl Jam'},
{title: 'In Utero',
artist: 'Nirvana'}
];

var myRestaurants = [
  {name: "Olive Garden"},
  {name: "Arby's"},
  {name: "El Farolito"},
  {name: "Eleven"}
];

//Serve static files (images, css, and js files) in public directory
app.use(express.static('public'));

//Use Handlebars as templating engine
app.set('view engine', 'hbs');
 
// "LIST" helper method for hbs template
hbs.registerHelper('list', function(context, options) {
var ret = "<ul>";

for(var i=0, j=context.length; i<j; i++) {
  ret = ret + "<li>" + options.fn(context[i]) + "</li>";
}
  return ret + "</ul>";
});



app.get('/', function(req, res){
  res.render('index', {name: myName, restaurants: myRestaurants});
});


//Render albums
app.get('/albums', function(req, res){
  // res.send('root path');
  res.render('albums', {albums: myAlbums});
});

app.get('/api/restaurants', function (req, res){
  res.json(myRestaurants);
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