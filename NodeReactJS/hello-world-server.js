var express = require('express');
var app = express();
var path = require('path');
var index = require('./src/index');

app.use('/',index);

app.use(express.static(path.join(__dirname, 'src')));
app.set('view', path.join(__dirname, 'src/view/'));

/*app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());*/

var server = app.listen(8041, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Example app listening at http://%s:%s", host, port);
})


/*var http = require('http');
http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');*/
