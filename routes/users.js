var express = require('express');
var router = express.Router();
var lib = require('fakesocial-js');




router.post('/add',function (req, res) {
        res.status(201).json(lib.signUp(req.body));     
});

router.post('/addpost/:id',function (req, res) {
        res.status(201).json(lib.addPost(parseInt(req.params.id),req.body));
});

router.get('/list',function (req, res){
    res.json(lib.allUser());
});



module.exports = router;
