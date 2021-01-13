var express = require('express');
var router = express.Router();
var usercontroller = require('../controller/UserController')
const passport = require('passport')
const verifyIdToken = require('../controller/verify')
/* GET users listing. */

router.post('/login', usercontroller.Login)
router.get('/get_all_user',usercontroller.getAllUser)
router.get('/getUser/:id',usercontroller.getUser)
router.post('/change_state_user/:id',usercontroller.changeStateUser);
router.post('/verifyToken',passport.authenticate('jwt',{session:false}),(req,res)=>{
    res.json({"msg":"verify success"});
})
module.exports = router;
