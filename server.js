var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (request, response) {
	response.sendFile(path.join(__dirname + '/index.html'));
});
app.use(express.static('dist'));

var server = app.listen(3000, function () {
	console.log('Listening at port %s', server.address().port);
});
