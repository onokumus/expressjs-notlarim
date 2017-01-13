var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var index = require('./routes/index');
var kisiler = require('./routes/kisiler');

var app = express();

app.use(function (req, res, next) {
  console.log('http://%s%s sayfası istekte bulunuldu', req.hostname, req.path);
  next();
});

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(index);
app.use(kisiler);

app.get('/diger', function (request, response) {
  response.send('Diğer sayfadasınız.');
});

app.listen(3000, function () {
  console.log('express.js sunucusu 3000 portundan başlatıldı');
});
