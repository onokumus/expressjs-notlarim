# 04-statik-dosyalar

express.js statik dosyalar için de sunucu olarak kullanılabilir. Bunun için `express.static()` fonksiyonu express'in kullanımına sunulur. express.static() fonksiyonu parametre olarak yol (path) değerini alır. Yol parametresi olarak statik dosyaların bulunduğu klasör yolu gösterilmelidir. Örnekte `public` klasörü kullanılmıştır.
```js
// app.js
app.use(express.static('public'));
```
Tavsiye edilen kullanım şekli node.js "in path modülü ile kullanımdır.
```js
// app.js
var path = require('path');
...

app.use(express.static(path.join(__dirname, 'public')));
```

Tarayıcıdan [http://localhost:3000/statik.html](http://localhost:3000/statik.html) sayfasına erişildiğinde public klasöründe yer alan resim, css, javascript ve statik html sayfalarına ulaşılabildiği görülecektir. Ayrıca sadece resim dosyalarına [http://localhost:3000/img/express.png](http://localhost:3000/img/express.png) adresinden, sadece css dosyalarına [http://localhost:3000/css/app.css](http://localhost:3000/css/app.css) adresinden ve javascript dosyalarına  [http://localhost:3000/js/statik.js](http://localhost:3000/js/statik.js) adresinden ulaşılabileceği görülür. Bu klasörün içerisine dışarıdan erişim hep açık olacağı için görülmesi istenmeyen dosyalar konulmamalıdır.

> statik.html dosyasının ismi `index.html` olarak değiştirildiğinde tarayıcıdan [http://localhost:3000](http://localhost:3000) sayfası olarak "Merhaba Dünya!" değil değiştirdiğimiz bu dosya gösterilecektir.

#### Not
Örnekten de görülebileceği gibi express.js statik web sunucusu olarak da kullanılabilir. Fakat tavsiye edilen kullanım şekli bu değildir.
