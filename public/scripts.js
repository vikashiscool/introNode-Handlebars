console.log("I live to serve. You got served... ugh.")


// In your scripts.js file, write a jQuery ajax request to get the taqueria data. When the response comes back, display all the taqueria names above the albums on your site's root page (localhost:3000/).

// Hint: $.get('/api/taquerias', function(data){// your code here});


$.get('/api/restaurants', function(data){
  console.log(data);
}, function() {
  console.log(":(");
});