import mongoose from "mongoose";

const download_module=new mongoose.Schema({
   userType: {
  type: String,
  enum: [
    "resumeDownload",
    "githubProfile",
    "linkedinProfile",
    "twitterProfile",
    "facebookProfile",
    "hireMeClick",
    "contactForm",
    "headerButtonClick",
    "dotsNavigation",
    "userProfileView",
    "singlePageView",
    "multiPageView",
    "vsCodeView",
    "githubTabView",
    "postmanTabView"
  ],
  required: true,
},
userCount:{
    type:Number,
    required:true,
}
},
{
    timestamps:true
});

export default mongoose.model("Download_module",download_module);