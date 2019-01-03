// The beginning of something great.

const express = require('express');
const path = require('path')
const app = express();
 

app.use(express.static(path.join(__dirname, "client")))

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', '*');

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});


app.listen(80, () => console.log('Running xScratch'))

app.get('/', (req, res) => {  
	res.redirect("/home")
});

app.get('/home', (req, res) => {
	res.redirect(path.join(__dirname, "client/home/index.html"))
});
