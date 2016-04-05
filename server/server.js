var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/MVP');

require('./middleware.js')(app, express);
require('./router.js')(app, express);

app.listen(8000);

module.exports = app;
