var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var kisiler = [
  {isim: 'Ali', soyisim: 'Gel', yas: 12},
  {isim: 'Veli', soyisim: 'Kaya', yas: 34},
  {isim: 'Esin', soyisim: 'Demir', yas: 56}
];

app.use(function (req, res, next) {
  console.log('http://%s%s sayfası istekte bulunuldu', req.hostname, req.path);
  next();
});

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (request, response) {
  // response.send('Merhaba Dünya!');
  response.render('index', {
    isim: kisiler[0].isim
  });
});

app.get('/diger', function (request, response) {
  response.send('Diğer sayfadasınız.');
});

app.get('/kisiler', function (request, response) {
  // response.json(kisiler);
  response.render('kisiler', {
    kisiler: kisiler
  });
});

app.listen(3000, function () {
  console.log('express.js sunucusu 3000 portundan başlatıldı');
});
