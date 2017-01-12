var express = require('express');
var app = express();

app.get('/', function (request, response) {
  response.send('Merhaba Dünya!');
});

app.get('/diger', function (request, response) {
  response.send('Diğer sayfadasınız.');
});

app.listen(3000, function () {
  console.log('express.js sunucusu 3000 portundan başlatıldı');
});
