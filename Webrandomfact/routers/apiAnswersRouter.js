const express=require('express');
const router=express.Router();
const answerController=require('../controllers/answersController');
router.post('/add',(req,res)=>{
  answerController.createAnswer(req.body.answer,req.cookies.questionId,req.cookies.userId, (err, data) => {
    if(err)
      {console.log(err);
      res.redirect('/');
    }
    else{
      // console.log(req.body.answer);
      res.redirect(`/api/answers/${req.cookies.questionId}`);
    }
  });
});

router.post('/like',(req,res)=>{
answerController.updateLikeAnswer(req.body.Like,req.cookies.userId,(err,doc)=>{
  res.redirect(`/api/answers/${doc.idQuestion}`);
})
})
router.get('/:id', (req, res) => {
let answerList =answerController.getAllCookAnswerByIdQuestion(req.params.id,answerList=>{

  let data =  answerList.map((answerList)=>{
    if(answerList.like.indexOf(req.cookies.userId)==-1)
    return {
      idAnswer:answerList._id,
      idQuestion:answerList.idQuestion,
      answer:answerList.answer,
      username:answerList.idUser.username,
      userAvatar:answerList.idUser.userAvatar,
      like:answerList.like.length,
      liked:false,
    }
    else
      return {
        idAnswer:answerList._id,
        idQuestion:answerList.idQuestion,
        answer:answerList.answer,
        username:answerList.idUser.username,
        userAvatar:answerList.idUser.userAvatar,
        like:answerList.like.length,
        liked:true,
      }
    })
    res.render("answer",{data:data});
})
});
module.exports=router;
