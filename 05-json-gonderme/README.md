# 05-json-gonderme

## body-parser
express.js ile json formatında veri göndermek için `body-parser` modülü kullanılmalıdır.
[Detaylı Bilgi](https://github.com/expressjs/body-parser)

### Ekleme
```bash
npm i -S body-parser
```

### Yükleme
```js
// app.js
var bodyParser = require('body-parser');
app.use(bodyParser.json());
```

### Kullanım
```js
// app.js
var kisiler = [
  {isim: 'Ali', soyisim: 'Gel', yas: 12},
  {isim: 'Veli', soyisim: 'Kaya', yas: 34},
  {isim: 'Esin', soyisim: 'Demir', yas: 56}
];
app.get('/kisiler', function (request, response) {
  response.json(kisiler);
});
```

### Açıklama
[http://localhost:3000/kisiler](http://localhost:3000/kisiler) adresinden json formatında veri alındığı görülebilir.
