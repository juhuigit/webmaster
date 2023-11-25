var express = require('express');
var router = express.Router();

// 로그인 페이지로 이동
// /users가 생략되어있음. index로 이동, login.ejs를 출력함.
router.get('/login', function(req, res, next) {
  res.render('index', {title:'로그인', pageName:'users/login.ejs'});
});

// 회원가입 페이지로 이동
router.get('/join', function(req, res, next) {
  res.render('index', {title: '회원가입', pageName: 'users/join.ejs'});
});

// 마이페이지
router.get('/mypage', function(req, res){
  res.render('index', {title: '마이페이지', pageName: 'users/mypage.ejs'});
});

module.exports = router;
