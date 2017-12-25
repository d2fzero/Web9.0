const express=require('express');
const router=express.Router();
const questionController=require('../controllers/questionsController');

router.get('/add',(req,res)=>{
    res.render('question');
});
router.post('/add',(req,res)=>{
  questionController.createQuestion(req.body, (err, data) => {
    if(err)
      res.redirect('/');
    else
      res.redirect('/api/questions/add');
  });
});

module.exports=router;
