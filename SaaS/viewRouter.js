const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/ask.html");
});
// router.get('/questionLast',(req,res) => {
//   let questionList = fileController.readDataFromFile(outputFileName);
//   let question = questionList[questionList.length-1];
//   res.render("question",
//     {question: question.question,
//       yes:question.yes,
//       no:question.no
//       // layout = "test"
//   });
// })
//
// router.post('/',(req,res) => {
//   let questionList = [];
//   try{
//     questionList = fileController.readDataFromFile(outputFileName);
//   } catch(ex){
//     console.log(ex);
//     questionList = [];
//   }
//   let newQuestion = {
//     question : req.body.question,
//     yes:0,
//     no:0,
//   }
//   questionList.push(newQuestion);
//   fileController.writeDataToFile(outputFileName,questionList);
//   res.redirect('/questionLast');
//
// })


module.exports = router;
