var express = require('express');
var app = express();

app.use(express.static('assets'));

app.get('/', function (req, res) {
    res.sendFile('/index.html');
});

var server = app.listen(3000, 'localhost', function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});

app.get('/userform', function (req, res) {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name,
        email: req.query.email,
        date_of_birth: req.query.date_of_birth,
        sex: req.query.sex,
        city: req.query.city
    };
    res.end(JSON.stringify(response));
});