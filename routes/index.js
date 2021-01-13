const express = require('express');
const router = express.Router();
const user =require('../controller/UserController')
const chessController = require('../controller/chessController')
/* GET home page. */
router.get('/',function(req, res, next){
  res.json("Kha dep trai is here")
});
router.get('/getAllMatch',chessController.getAllMatch)
router.get('/getAllMatchOfUser/:id',chessController.getAllMatchOfUser);
router.get('/getChatUser/:id',chessController.getChatOfMatch)
module.exports = router;
