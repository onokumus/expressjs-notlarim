# 00-Kurulum

## Test
- Öncelikle [node.js](https://nodejs.org) kurulumu test edilir.
```bash
node -v
// => v7.4.0
```
- Şimdi de [npm](https://www.npmjs.com/) kurulumu test edilir.
```bash
npm -v
// => 4.0.5
```

## Paket Oluşturma
Konsolda `npm init` komutunu verilerek package.json dosyası oluşturulur. Sorulan sorular cevaplanır. Her cevaptan sonra `enter` tuşuna basılarak bir sonraki soruya geçilir. En sonunda package.json dosyası oluşacaktır.

> *İPUCU :* `npm init` komutu yerine `npm init -y` komutu verilerek öntanımlı ayarlarla package.json dosyası oluşması sağlanabilir.

## app.js Dosyası
Oluşturulan paketin (modül) bir node.js modülü olması için
bir main dosyası olmalıdır. Bu main dosyasının isminin main.js olması zorunlu değildir.

Burada oluşturulan paket başkaları tarafından yüklenip kullanılmayacağı için [package.json](https://docs.npmjs.com/files/package.json#main) dosyasında `main` ayarının düzgün yapılması şart değildir. Fakat burada `app.js` olarak belirlenmiştir. [package.json#L5](package.json#L5)


```js
// app.js
console.log('Merhaba Dünya!');
```
Çalıştığını kontrol etmek için konsolda
```bash
node app
```
komutunun çıktısı olarak
```bash
Merhaba Dünya!
```
görülmelidir.

### Son
Konsolda `node app` komutu yerine `npm start` komutu verilerek çalıştırılmak istendiğinde package.json dosyasında scripts ayarı güncellenmiştir. [package.json#L7](package.json#L7)
