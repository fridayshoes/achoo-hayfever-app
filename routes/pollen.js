var express = require('express');
var router = express.Router();

/* GET pollen listing. */
router.get('/', function(req, res, next) {
  res.send('Pollen Count from Express');
});

module.exports = router;