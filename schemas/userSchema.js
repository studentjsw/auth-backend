const validator = require('validator');
const  mongoose  = require('mongoose');

var UserSchema = new mongoose.Schema(
  {
    name:{type:String,required:true},
    email:{
        type:String,
        required:true,
        lowercase:true,
        validate:(value)=>{
            return validator.isEmail(value)   //if value is true save the record else return error
        }

    },
    mobile:{type:String,default:'000-000-0000'},
    password:{type:String,required:true},
    role:{type:String,default:'user'},
    createAt:{type:Date,default:Date.now}
  },
  {
    collection:'users',  //used to achieve collectiion name what we want
    versionKey:false
  }

)

let UserModel = mongoose.model('user',UserSchema)//it means schemas for user collections
module.exports={UserModel}  //name always automatically ser plural form but to achieve singular form -code above