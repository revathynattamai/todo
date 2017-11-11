var port = process.env.PORT || 5000;
var express = require('express');
var app = express();

app.use('/',express.static('dist'));
app.listen(port, () => {
    console.log('Listening to port:', port);
});

