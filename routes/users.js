var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('haha123');
});

router.get('/xxx', function(req, res, next) {
  res.send('haha456');
});
module.exports = router;
