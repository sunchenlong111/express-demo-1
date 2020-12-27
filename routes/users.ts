import { RequestHandler } from "express";

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('haha1233');
} as RequestHandler);

router.get('/xxx', function(req, res, next) {
  res.send('haha456');
} as RequestHandler);
module.exports = router;
