const express=require('express');
const router=express.Router();
const questionController=require('../controllers/questionController');

// router.get('/',(req,res)=>{
//     res.render('addQuestion');
// })
// router.post('/',(req,res)=>{
//   console.log(req.body);
// });
router.post('/',(req,res)=>{
  questionController.createQuestion(req.body, (err, data) => {
    if(err)
      res.redirect('/');
    else
      res.redirect('/add');
  });

});

module.exports=router;
