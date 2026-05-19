import mongoose from "mongoose";

const download_module=new mongoose.Schema({
download_count:{
    type:Number,
    required:true,
}
},
{
    timestamps:true
});

export default mongoose.model("Download_module",download_module);