const usersModel=require('../models/userModel');
const bcrypt = require('bcrypt');
const createUser = (user, callback) => {
  bcrypt.hash(user.password, 10, (err, hash) => {
    let newUser = {
      username : user.username,
      password : hash,
      email : user.email,
      userAvatar : user.userAvatar,
      title : user.title
    };
    usersModel.create(newUser, (err, data) => {
      if (err) {
        console.log(err);
        callback(err);
      } else {
        callback(null, data);
      }
    })
  });
};
const getUserById = (id) => {
  return questionModel.findOne({_id : id});
}

const updateUser = (id,idQuestion,idAnswer,callback) => {
  getUserById(id)
  .then((user) => {
    askList={
    idQuestion:idQuestion,
    idAnswer:idAnswer,
    }
    question.save(function (err, user) {
      if (err) return console.error(err);
      else callback(null, user);
    });
  }).catch(err => console.log(err));
};
const loginUser = (user, callback) => {
  usersModel.findOne({ username: user.username }, "username password", (err, data) => {
    if (err)
      callback(err);
    else if (!data)
      callback({ message: "user not found" });
    else {
      bcrypt.compare(user.password, data.password).then(result => {
        if (!result)
          callback({ message: "password is wrong" });
        else {
          data.remember = user.remember;
          callback(null, data);
        }
      })
    }
  })
}
module.exports={createUser,getUserById,loginUser,updateUser}
