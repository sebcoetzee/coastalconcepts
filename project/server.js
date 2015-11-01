var express = require('express');
var serveStatic = require('serve-static');

var app = express();

var port = 8999;

app.use(serveStatic("build"));

app.listen(port);
console.log("Server listening on port " + port + ".");
