# 01-expressjs-yükleme

## express.js ekleme
Konsolda
```bash
npm i -S express
```
komutu verilerek express.js paketi uygulamaya eklenir.
> Bu komutun uzun şekli `npm install --save express` dir. `-S` parametresi uygulamanın çalışması için express modülünün gerekli olduğu anlamına gelir.

Değişikliği kontrol için bakınız. [package.json#L13](package.json#L13)

> `npm i -S express` komutu express.js nin en son versiyonunu uygulamaya ekler. Daha düşük versiyon yüklenmek istenirse paketin sonuna `@versiyon` eklenmelidir. Örneğin `npm i -S express@4.13.4` komutu express.js nin 4.13.4 versiyonunu yükleyecektir.

> Detaylı bilgi için https://docs.npmjs.com/files/package.json#dependencies

## express uygulaması oluşturma
- express çağrılır. [Detaylı Bilgi](http://expressjs.com/en/4x/api.html#express)
```js
// app.js
var express = require('express');
var app = express();
```

- Anasayfa
Sunucudan HTTP GET yöntemiyle istekte (request) bulunulur. Buradaki '/' rotanın kök olduğu anlamındadır. Sunucu bu isteğe cevap (response) verir. Verilen cevap (şimdilik) bir text mesajıdır. "Merhaba Dünya!" cevabını gönderir (send).

  ```js
  // app.js
  ...
  app.get('/', function (request, response) {
    response.send('Merhaba Dünya!');
  });
  ```
  [Detaylı Bilgi](http://expressjs.com/en/4x/api.html#app.get.method)

- Port
Sunucunun hangi portu dinlemesi belirtilir. Genelde 3000 dir.
```js
// app.js
...
app.listen(3000, function () {
  console.log('express.js sunucusu 3000 portundan başlatıldı');
});
```
[Detaylı Bilgi](http://expressjs.com/en/4x/api.html#app.listen)

## Test

Tarayıcıda [http://127.0.0.1:3000](http://127.0.0.1:3000) adresinden "Merhaba Dünya!" yazısı görülmelidir.

> Eğer uygulamanın gerçek bir sunucuda çalışması isteniyorsa port 80 seçilmelidir. O zaman http://site.com linkinde anasayfa görülecektir. Linux ortamında 80 numaralı porta erişim için root yetkisine sahip olunmalıdır. Örneğin `sudo npm start` komutu verilmelidir.
