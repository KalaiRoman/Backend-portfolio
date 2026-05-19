import mongoose from "mongoose";

const visiter_module=new mongoose.Schema({
    visiter_count:{
        type:Number,
        required:true,
    }
},
{
    timestamps:true
});

export default mongoose.model("Visiter_module",visiter_module);

