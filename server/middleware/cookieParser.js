const parseCookies = (req, res, next) => {
  var cookie = req.get('cookie');
  req.cookies = {cookie};



  next();
};

module.exports = parseCookies;