'use strict';
//Set global here.
if (!global.__base) {
  global.__base = __dirname;
}

var cookieParser = require('cookie-parser')();
var express = require('express');
var path = require('path');
var mustachex = require('mustachex');

var config = require(__base + '/config');
var mw = require(__base + '/middlewares');
var routes = require(__base + '/routes');

var app = express();

app
  .engine('html', mustachex.express)
  .set('view engine', 'html')
  .set('views', __base + '/views')
  .set('host', config.server.host)
  .set('port', config.server.port);

app
  .use('/public', express.static(path.join(__base, '/public')))
  .use(mw.requestLogger)
  .use(cookieParser)
  .use(routes)
  .use(mw.notFound)
  .use(mw.errorHandler);

app
  .listen(app.get('port'), function () {
    console.log('Starting Server %s %s', config.server.host, config.server.port);
  });
