const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  var cookie = req.cookies;
  //
  res.set(cookie)

};



// +--------+-------------+------+-----+---------+----------------+
// | Field  | Type        | Null | Key | Default | Extra          |
// +--------+-------------+------+-----+---------+----------------+
// | id     | int(11)     | NO   | PRI | NULL    | auto_increment |
// | hash   | varchar(64) | YES  |     | NULL    |                |
// | userId | int(11)     | YES  |     | NULL    |                |
// +--------+-------------+------+-----+---------+----------------+


/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

