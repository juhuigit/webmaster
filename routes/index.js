var express = require('express');
var router = express.Router();

/* GET home page. */
// render : 그려준다 라는 의미
router.get('/', function(req, res, next) {
  res.render('index', { title: '홈페이지', pageName:'home.ejs'}); // view에 index.ejs 파일
});

module.exports = router;
