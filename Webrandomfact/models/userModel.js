const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const userModel = new Schema({
  username :{type:String,require:true,unique:true},
  password:{type:String,require:true},
  email: { type: String, required: true, unique: true,
    validate: {
      validator: (email) => {
        return /[\w]+@[\w]+.[\w]+/ig.test(email);
      },
      message: "email not valid"
    }
  },
  userAvatar:{type:String},
  title:{type:String},
  score:{type:Number,default:0},
  askList:{type:Array,default:0},

   }, { timestamps: { createdAt: 'date' } });

module.exports = mongoose.model('users', userModel);
