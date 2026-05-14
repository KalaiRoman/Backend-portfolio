import mongoose from "mongoose";

const contact_module=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    message:{
        type:String,
        required:true,
    }
  
},
{
    timestamps:true
});

export default mongoose.model("Contact_module",contact_module);