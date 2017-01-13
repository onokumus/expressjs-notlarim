# 11-loglama

Sitede neler olup bittiğini görmek için loglamak gerekebilir. Bunun için `morgan` modülü gereklidir.

### Ekleme
```bash
npm i -S morgan
```

### Yükleme
```js
// app.js
var morgan = require('morgan');
```

### Kullanım
```js
// app.js
app.use(morgan('combined'));
```

### Açıklama
morgan() fonksiyonu için öntanımlı olarak bir kaç log formatı tanımlanmıştır. Bunlar
- combined
- common
- dev
- short
- tiny

İstenildiğinde bu format biçimleri özelleştrilebilir. Detaylı bilgi için [morgan](https://github.com/expressjs/morgan)

> sayfa istekleri konsoldan kontrol edilebilir.

### Kaydetme
Yukarıdaki biçimde sunucu loglamayı sadece konsolda gösterecek fakat kaydetmeyecektir. Kaydetmek için
```js
// app.js
var fs = require('fs');
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'log/access.log'), {flags: 'a'});
app.use(morgan('combined', {stream: accessLogStream}));
```
Yukarıdaki kod kayıtları `log` klasörü içindeki `access.log` dosyasında saklayacaktır.

> Uygulamanın ana dizininde log klasörü önceden oluşturulmalıdır.

> Sunucu her isteği kaydetmeye çalışacağı için zamanla bu dosya çok büyüyecektir. Ayrıca ziyaretçi sayısı arttığında dosya yazma işlemleri de artacağından performans sıkıntısı oluşabilir.
