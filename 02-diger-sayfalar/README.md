# 02-diger-sayfalar

app.get() metodu için 2 parametre vardır. İlki yol (path), diğeri fonksiyon (callback) dur.
```js
// app.js
app.get('/diger', function (request, response) {
  response.send('Diğer sayfadasınız.');
});
```
Yukarıdaki kod, tarayıcıdan [http://localhost:3000/baska](http://localhost:3000/baska) sayfası açıldığında "Diğer sayfadasınız." gösterecektir.

Eğer tanımlanmamış bir sayfa istekte bulunulursa, sunucu hata verecektir. Örneğin [http://localhost:3000/baska](http://localhost:3000/baska) isteğine karşılık sunucu "Cannot GET /baska " cevabı döndürecektir.
