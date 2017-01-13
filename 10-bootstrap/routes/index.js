var express = require('express');
var router = express.Router();

/* ana sayfa . */
router.get('/', function(req, res, next) {
  res.render('index', { isim: 'Express JS' });
});

module.exports = router;
