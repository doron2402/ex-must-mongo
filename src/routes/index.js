'use strict';

var router = require('express').Router();
var auth = require('./auth');

router
  .get('/login', auth.getLogin)
  .post('/login', auth.postLogin)
  .get('/forget', auth.getForget)
  .post('/forget', auth.postForget)

module.exports = router;
