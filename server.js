const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
const fs = require('fs');

// serve static assets normally
app.use(express.static(__dirname + '/src'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/getNews', function(req,res){
  res.send('Hello, world!')
});

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'src', 'index.html'))
})


app.listen(3000,function(){
  console.log("Started on PORT 3000");
});
