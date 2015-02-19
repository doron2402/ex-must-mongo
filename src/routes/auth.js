var auth = {};

auth.getLogin = function(req, res) {
  res.render('auth/login', { data: 'login' });
};

auth.postLogin = function(req, res) {
  res.send({code: 'ok'});
};

auth.getForget = function(req, res) {
res.render('auth/forget', { data: 'forget' });
};

auth.postForget = function(req, res) {
  res.send({code: 'ok'});
};


module.exports = auth;