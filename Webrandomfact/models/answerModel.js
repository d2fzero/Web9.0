const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const answerModel = new Schema({
  // title: {type : String, required: true},
  answer:{type:String,require:true},
  idQuestion:{type:ObjectId,ref:'questions',require:true},
  idUser:{type:ObjectId,ref:'users',require:true},
  like:{type:Array,default:[]},
   });

module.exports = mongoose.model('answers', answerModel);
