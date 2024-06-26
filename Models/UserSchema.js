const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    blogs:{
        type:Array,
        default:[],
    }
});

userSchema.pre('save',async (req,res)=>{
    const user =this;

    if(userSchema.isModified('password')){
        user.password = await bcrypt.hash(user.password,8);
    }
})

module.exports = mongoose.model('User',userSchema);  //exporting the User model with the schema
