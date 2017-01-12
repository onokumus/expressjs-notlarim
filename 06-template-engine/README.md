# 06-template-engine

express.js ile bir çok şablon motoru (template engine) kullanılabilir. Amaç şablona parametre ile değer gönderip bu değeri dinamik olarak işlemektir. express.js ile bir çok template engine kullanılabilir. Tüm liste için [bakınız](https://github.com/expressjs/express/wiki?_ga=1.17225913.1072188425.1484202549#template-engines)

Burada [handlebars.js](http://handlebarsjs.com/) kullanılmıştır.

### Ekleme
```bash
npm i -S hbs
```

### Yükleme
```js
// app.js
app.set('view engine', 'hbs');
```

### Views Klasörü
`hbs` uzantılı dosyalarının saklandığı klasör belirtilir. Klasör adı istenilen herhangi bir isim olabilir. Genelde `views` tercih edilir.
```js
// app.js
app.set('views', path.join(__dirname, 'views'));
```

views klasöründeki `index.hbs` dosyası
```hbs
<h1>index.hbs dosyasından Merhaba!</h1>
<h2>Gelen parametre değeri: {{isim}}</h2>
```

### Kullanım
`render()` fonksiyonu kullanılır. İlk parametre olarak şablon dosyasının adı (uzantısız olarak), ikinci parametre olarak nesne (javascript object) biçiminde değerler gönderilir.
```js
// app.js
app.get('/', function (request, response) {
  response.render('index', {
    isim: kisiler[0].isim
  });
});

app.get('/kisiler', function (request, response) {
  // response.json(kisiler);
  response.render('kisiler', {
    kisiler: kisiler
  });
});
```
