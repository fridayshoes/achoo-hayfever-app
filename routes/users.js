const { application } = require('express');
var express = require('express');
var router = express.Router();

let location = ""
/* GET users listing. */
router.post('/', function(req, res, next) {
  location = req.body.value
  console.log(location)
  res.json(req.body.value);
});

router.get('/', function(req, res, next) {
  console.log(location)
  res.send(location);
});

module.exports = router;
