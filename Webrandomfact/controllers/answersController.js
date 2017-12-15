const answerModel=require('../models/answerModel');
const questionModel=require('../models/questionModel');
// const getAnswerByIdQuestion=(id,callback)=>{
//     answerModel.find({idQuestion:id},(err,data)=>{
//       if(err)
//       {
//         console.log(err);
//       callback(err);
//       }
//       else{
//         callback(data);
//       }
//     })
// };
const getAnswerByIdQuestion = (id,callback) => {
  answerModel.find({idQuestion:id})
    .populate("idUser", "username userAvatar")
    .sort({like:-1})
    .exec((err, data) => {
      if (err) {
        console.log(err);
        callback(err);
      } else {
        callback(data);
      }
    });
};
const getAllCookAnswerByIdQuestion = (id,callback) => {
  getAnswerByIdQuestion(id,(err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(data.map((value) => {
        return cookViewImageData(value);
      }));
    }
  })
}

const cookViewImageData = (imageData) => {
  return {
    id: imageData._id,
    userAvatar: imageData.idUser.userAvatar,
    username: imageData.idUser.username,

  }
};

const createAnswer=(answer,idQuestion,idUser,callback)=>{
  let newAnswer={
    answer:answer,
    idQuestion:idQuestion,
    idUser:idUser,
  }
  answerModel.create(newAnswer,(err,data)=>{
    if(err)
    {
      console.log(err);
      callback(err);
    }
    else{
      callback(null,data);
    }
  })
};
const getAnswerById = (id) => {
  return answerModel.findOne({_id : id});
}

const updateLikeAnswer=(id,callback)=>{
    getAnswerById(id)
    .then((answer)=>{
      answer.like++;
      answer.save(function(err,answer){
        if(err) return console.error();
        else callback(null,answer);
      });
    })
    .catch(err=>console.log(err))
}
module.exports={getAnswerByIdQuestion,
  updateLikeAnswer,
  createAnswer,getAllCookAnswerByIdQuestion};
