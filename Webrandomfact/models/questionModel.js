const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const questionModel = new Schema({
  question: { type : String, required: true,unique:true }
   },
 { timestamps: { createdAt: 'date' } });

module.exports = mongoose.model('questions', questionModel);
