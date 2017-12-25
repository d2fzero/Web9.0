const express = require('express');
const router = express.Router();
const questionController=require('../controllers/questionsController');
// const textController=require('../controllers/textController');

router.get('/', (req, res) => {
  let question = questionController.getRandomQuestion((question) => {
    if(question){
      res.cookie("questionId",question._id);
      res.render(
        "home",
        {
          question: question.question,
        }
      );
    }
    else{
      res.redirect("/api/questions/add");
    }

  });
  // console.log("user id cookie:",req.cookies.userId);
  // // console.log("aaadd");
  // console.log("questionIdL",req.cookies.questionId);

});

module.exports = router;
