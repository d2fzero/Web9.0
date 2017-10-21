const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const exhbs = require('express-handlebars');
const outputFileName = "question.json";
const fileController = require('./fileController');
const viewRouter = require('./viewRouter');
const questionRouter = require('./questionRouter');

let app = express();
let id =0
app.engine("handlebars", exhbs({ defaultLayout : "main"}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended : true }));

app.get('/', (req, res) => {
  res.render("home");
});

app.get('/style.css', (req, res) => {
  res.sendFile(__dirname + "/public/style.css");
});

app.get('/about', (req, res) => {
  res.render("about");
});

// app.use('/ask', viewRouter);
app.get('/ask', (req, res) => {
  res.render("ask");
});
app.use('/question', questionRouter);
app.get('/questionLast',(req,res) => {
  let questionList = fileController.readDataFromFile(outputFileName);
  let question = questionList[questionList.length-1];
  res.render("question",
    {question: question.question,
      yes:question.yes,
      no:question.no
      // layout = "test"
  });
})

app.post('/question',(req,res) => {
  let questionList = [];
  try{
    questionList = fileController.readDataFromFile(outputFileName);
  } catch(ex){
    console.log(ex);
    questionList = [];
  }
  let newQuestion = {
    question : req.body.question,
    yes:0,
    no:0,
    id:id++
  }
  // console.log(questionList);
  questionList.push(newQuestion);
  fileController.writeDataToFile(outputFileName,questionList);
  // app.use('/question', questionRouter);
  res.redirect('/questionLast');
  // questionRouter.get('/${id}')
  // console.log(`/question/${id}`);
  // res.redirect(`/question/${id}`);
})

//
// router.get('/ask/question');
// router.get('/ask/postabout');

app.listen(6969, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Website is up");
  }
});
