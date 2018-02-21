var express = require('express');
var router = express.Router();
var lib = require('fakesocial-js-function');
var validTokens = ['pippo'];

var auth = function (req, res, next) {
    if (validTokens.includes(req.query.token)) {
        return next();
    }
    return res.status(401).json({ message: 'Invalid Token' })
}



router.post('/add', auth, function (req, res) {
        res.status(201).json(lib.signUp(req.body));     
});

router.post('/addpost/:id',auth, function (req, res) {
        res.status(201).json(lib.addPost(parseInt(req.params.id),req.body));
});

router.get('/list',auth, function (req, res){
    res.json(lib.allUser());
});
router.post('/sendReq',auth, function (req, res){
        res.json(lib.reqFr(req.body.idE, req.body.idR))
});
router.post('/conferme',auth, function (req, res){
    res.json(lib.conferme(req.body.id, req.body.idFriend))
});
router.delete('/delPost/:id/:idPost',auth, function (req, res){
    res.json(lib.delPost(parseInt(req.params.id),parseInt(req.params.idPost)))
});
router.delete('/delFriend/:id/:idFriend',auth, function (req, res){
    res.json(lib.delFriend(parseInt(req.params.id),parseInt(req.params.idFriend)))
});
router.delete('/delReq/:id/:idReqE',auth, function (req, res){
    res.json(lib.delReq(parseInt(req.params.id),parseInt(req.params.idReqE)))
});
router.get('/friendPost/:id/:idFriend',auth, function (req, res){
    res.json(lib.viewPost(parseInt(req.params.id),parseInt(req.params.idFriend)))
});
router.get('/tokens',auth, function (req, res){
    res.json(lib.allToken())
});


module.exports = router;
