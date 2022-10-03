var express = require('express');
var router = express.Router();
var State = require('../models/State')

/* GET users listing. */
router.get('/', function(req, res, next) {
  State.find({},(err,state) => {
    if(err) return next(err);
    res.json({state});
  })
});

//creating articals form
router.get('/api/new',(req,res,next) => {
  res.json({state})
});

//create articals
router.post('/',(req,res,next) => {
   State.create(req.body,(err,createBolg) => {
    if(err) return next(err);
    res.json({state})
   })
});

//fatch singel artical
router.get('/api/:id',(req,res,next) => {
  var id = req.params.id;
  State.findById(id,(err,state) => {
    if(err) return next(err);
    res.json({state})
  })
});

//edit artical
router.get('/api/:id/edit',(req,res) => {
  var id = req.params.id;
  State.findById(id,(err,article) => {
    if(err) return next(err);
    res.json({state})
  })
});


router.post('/:id',(req,res) => {
  var id = req.params.id;
  State.findByIdAndUpdate(id,req.body,(err,updateData) => {
    state.tags = state.tags.join(" ")
    if(err) return next(err,updateData);
    res.json({state})
   })
});
1
router.get('/api/:id/delete',(req,res,next) => {
  var id = req.params.id;
  State.findByIdAndDelete(id,(err,state) =>{
    if(err) return next(err);
    res.json({state})
  })
})
//inc likes
router.get('/api/:id/likes',(req,res) => {
  var id = req.params.id;
  State.findByIdAndUpdate(id,{$inc:{likes: 1}},(err,state) => {
    res.json({state})
  })
})
module.exports = router;

