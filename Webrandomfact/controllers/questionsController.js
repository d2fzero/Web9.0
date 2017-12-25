const questionModel=require('../models/questionModel');
const getQuestionList =(callback)=>{
  questionModel.distinct('question',(err,result)=>{
    let questionList=result;
    callback(questionList);
  })
}
const createQuestion = (question, callback) => {
  let newquestion = {
    question: question.question,
  };
  questionModel.create(newquestion, (err, data) => {
    if (err) {
      console.log(err.message);
      callback(err);
    } else {
      callback(null, data);
    }
  });
}
const getRandomQuestion = (callback) => {
  questionModel.find({}, (err, questionList) => {
    let randomId = Math.floor(Math.random() * questionList.length);
    let question = questionList[randomId];
    question.id = randomId;
    callback(question);
  });
}
const getAnswer=(question,callback)=>{
  let questionList=getQuestionList((questionList)=>{
    questionModel.distinct('answer',(err,result)=>{
      let answerList=result;
      let answer;
          for(let i=0;i<answerList.length;i++)
          if(question.toLowerCase().indexOf(questionList[i].toLowerCase())>=0)
            {
                answer=answerList[i];
                callback(answer);
                break;
            }
    })
  })
}

module.exports={getQuestionList,createQuestion,getRandomQuestion,getAnswer}
