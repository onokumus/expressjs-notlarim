var express = require('express');
var app = express();

app.get('/', function (request, response) {
  response.send('Merhaba Dünya!');
});

app.listen(3000, function () {
  console.log('express.js sunucusu 3000 portundan başlatıldı');
});
