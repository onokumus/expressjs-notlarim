# 08-form

Öncelikle `body-parser` modülününü `urlencoded()` fonksiyonu etkinleştirilir.
```js
// app.js
app.use(bodyParser.urlencoded({ extended: false }));
```

express.js in `post()` metodundan yararlanılır. Bu metoda path ve callback parametreleri geçilir.
```js
// app.js
app.post('/kisiler/ekle', function (request, response) {
// request den gelen bilgiler işleme sokulur. Veritabanına kaydetmek, düzeltmek, silmek vb
// response ile dönüş yapılır 
});
```
