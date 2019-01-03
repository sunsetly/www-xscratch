// The beginning of something great.

var subdomain = require('express-subdomain');
var express = require('express');
var app = express();
 

app.use(express.static(path.join(__dirname, "client")))


app.get('/', function(req, res) {
    res.redirect(path.join(__dirname, '/client/home/index.html'))
});