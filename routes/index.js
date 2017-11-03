var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { root: 'views' });
});
//
// router.get('/game', function(req, res, next) {
//   res.render('game', { root: 'views' });
// });
//
// router.get('/results', function(req, res, next) {
//   res.render('', { root: 'views' });
// });
//
// router.get('/scoreboard', function(req, res, next) {
//   res.render('index', { root: 'views' });
// });

module.exports = router;
