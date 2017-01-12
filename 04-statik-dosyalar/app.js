var express = require('express');
var path = require('path');
var app = express();

app.use(function (req, res, next) {
  console.log('http://%s%s sayfası istekte bulunuldu', req.hostname, req.path);
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (request, response) {
  response.send('Merhaba Dünya!');
});

app.get('/diger', function (request, response) {
  response.send('Diğer sayfadasınız.');
});

app.listen(3000, function () {
  console.log('express.js sunucusu 3000 portundan başlatıldı');
});
