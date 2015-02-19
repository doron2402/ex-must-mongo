'use strict';

module.exports = function (err, req, res, next) {
  if (err) {
    switch (err) {
      case 400:
        res.status(400).render('400', { url: req.originalUrl });
        break;
      case 404:
        res.status(404).render('400', { url: req.originalUrl });
        break;
      case 500:
        res.status(500).render('500', { url: req.originalUrl });
        break;
      default:
        res.status(404).render('400', { url: req.originalUrl });
        break;
    }
  } else {
    return next();
  }
};
