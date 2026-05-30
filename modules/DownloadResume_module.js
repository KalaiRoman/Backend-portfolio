import mongoose from "mongoose";

const download_module = new mongoose.Schema(
  {
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
        "postmanTabView",
      ],
      required: true,
    },

    userCount: {
      type: Number,
      default: 1,
    },

    browser: {
      type: String,
      default: "",
    },

    browserVersion: {
      type: String,
      default: "",
    },

    os: {
      type: String,
      default: "",
    },

    device: {
      type: String,
      default: "",
    },

    ipAddress: {
      type: String,
      default: "",
    },

    userAgent: {
      type: String,
      default: "",
    },

    screenWidth: {
      type: Number,
    },

    screenHeight: {
      type: Number,
    },

    language: {
      type: String,
      default: "",
    },

    platform: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Download_module", download_module);