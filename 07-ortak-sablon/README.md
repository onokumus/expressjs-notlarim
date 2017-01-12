# 07-ortak-sablon

express.js ile template engine kullanırken iki ayrı `hbs` dosyası oluşturulmuştu. Bu iki dosyanın ortak kullanacağı statik dosyalar (css, resim, javascript, vb.) için ortak bir şablon oluşturulmalıdır. Çünkü bu dosyalar render edilirken ortak kullanacağı statik dosyalar olabilir. Ortak html taglarını ayrı ayrı yazmak gereksizdir.

Bunun için views klasörünün içinde `layout.hbs` dosyası oluşturulmalıdır.
```hbs
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>express.js notlarım</title>
    <link rel='stylesheet' href='/css/app.css' />
  </head>
  <body>
    <nav>
      <a href="/">Ana Sayfa</a>
      <a href="/kisiler">Kişiler Sayfası</a>
      <a href="/diger">Diğer Sayfa</a>
    </nav>

    {{{body}}}

    <script src="/js/statik.js" charset="utf-8"></script>
  </body>
</html>
```

layout.hbs dosyasındaki `{{{body}}}` gelen içeriğe göre renderlenecek, diğer kısımlar değişmeyecektir.

> [http://localhost:3000/diger](http://localhost:3000/diger) sayfasının şablon kullanmadığına dikkat.
