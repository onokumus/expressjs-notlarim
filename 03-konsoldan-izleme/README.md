# 03-konsoldan-izleme

Tarayıcıdan istekte bulunulan sayfalar konsoldan izlenebilir. Bunun için app.use() fonksiyonu kullanılır.
```js
// app.js
app.use(function (req, res, next) {
  console.log('http://%s%s sayfası istekte bulunuldu', req.hostname, req.path);
  next();
});
```
Burada önemli olan bu kodun app.get() metodundan önce yazılmasıdır. Sonraya bırakılırsa http://localhost:3000 ve http://localhost:3000/diger istekleri konsolda loglanmayacaktır. Ancak olmayan bir sayfa, örneğin http://localhost:3000/baska sayfası istekte bulunulursa konsolda loglanacaktır.
