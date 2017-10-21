const express = require('express');
const questionRouter = express.Router();
const fileController = require('./fileController');
const math = require('math');
const outputFileName = "question.json";
const questionList = fileController.readDataFromFile(outputFileName);

questionRouter.get('/',(req,res) => {
  //TO DO
  //get random question
  let random = math.floor(math.random()*questionList.length);
  let question = questionList[random];
  res.render("question",
    {question: question.question,
      yes:question.yes,
      no:question.no,
      id:question.id
  });
  id = random;
})


questionRouter.post('/No',(req,res) => {
    questionList[id].no = questionList[id].no+1;
    let question = questionList[id];
    res.render("question",
      {question: question.question,
        yes:question.yes,
        no:question.no,
        id:question.id
    });

})


questionRouter.post('/Yes',(req,res) => {
  questionList[id].yes = questionList[id].yes+1;
  let question = questionList[id];
  res.render("question",
    {question: question.question,
      yes:question.yes,
      no:question.no,
      id:question.id
  });
})
questionRouter.get('/',(req,res) => {

  let question = questionList[id];
  res.render("answer",
  {question:question.question,
    yes:question.yes,
    no:question.no,

  })
})


module.exports = questionRouter;
