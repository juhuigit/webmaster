var express = require('express');
var router = express.Router();


// 슬래시(/) 뒤에 local가 생략되어있음. -> app.js 에서 loclas.js 라우터를 /locals로 지정해줬기 때문임.

// 지역검색
router.get('/', function(req, res, next) {
  res.render('index', { title: '지역검색', pageName:'locals/search.ejs'});
});

// 즐겨찾기
router.get('/favorite', function(req, res, next) {
  res.render('index', { title: '즐겨찾기', pageName:'locals/favorite.ejs'});
});

module.exports = router;
