var express = require('express');
var app = express();

/*View Management Adding*/
var view = require('./staticView');

app.get('/', function (req, res){
	console.log(" '/' handler");
	res.sendFile( view.get('view') + "index.html" );

});

//export this app to use in our main app.js
module.exports = app;