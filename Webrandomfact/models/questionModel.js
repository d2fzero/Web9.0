const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const questionModel = new Schema({
  // title: {type : String, required: true},
  question: { type : String, required: true,unique:true },
  answer: { type: String, default: 0 }

   });

module.exports = mongoose.model('question', questionModel);
