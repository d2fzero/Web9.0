const express = require('express');
const router = express.Router();
const questionController=require('../controllers/questionController');
// const textController=require('../controllers/textController');

router.get('/', (req, res) => {
  let question = questionController.getRandomQuestion((question) => {
    res.render(
      "question",
      {
        answer: question.answer,
        question: question.question

      }
    );
  });
});


module.exports = router;
