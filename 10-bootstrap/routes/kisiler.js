var express = require('express');
var router = express.Router();
var kisiler = require('../model/kisiler');

/* kisiler sayfası . */
router.get('/kisiler', function(req, res, next) {
  res.render('kisiler', { kisiler: kisiler });
});

router.post('/kisiler/ekle', function (request, response) {

  var yeniKisi = {
    isim: request.body.isim,
    soyisim: request.body.soyisim,
    yas: request.body.yas
  };

  kisiler.push(yeniKisi); // yeniKisi nesnesini kisiler dizisine ekle
  response.redirect('/kisiler');
});

module.exports = router;
