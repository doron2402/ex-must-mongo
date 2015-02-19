module.exports = function (req, res, next) {
  next({status: 400, body: 'Page not found.'});
};