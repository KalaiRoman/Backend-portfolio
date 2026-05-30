import DownloadResume_module from '../modules/DownloadResume_module.js'

import { UAParser } from "ua-parser-js";

const DownloadCreate = async (req, res) => {
  try {

    const parser = new UAParser(req.headers["user-agent"]);
    const result = parser.getResult();
    const response = await DownloadResume_module.create({
      userType: req.body.userType,
      userCount: 1,
      browser: result.browser.name || "",
      browserVersion: result.browser.version || "",
      os: result.os.name || "",
      device: result.device.type || "Desktop",
      userAgent: req.headers["user-agent"],
      ipAddress:
        req.headers["x-forwarded-for"] || req.socket.remoteAddress,
    });

    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getDownloadCount = async (req, res) => {
  try {

    const counts = await DownloadResume_module.aggregate([
      {
        $group: {
          _id: "$userType",
          total: { $sum: "$userCount" },
        },
      },
    ]);

    const formattedData = {};

    counts.forEach((item) => {
      formattedData[item._id] = item.total;
    });

    res.status(200).json({
      success: true,
      data: formattedData,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const getBrowserData = async (req, res) => {
  try {
    const data = await DownloadResume_module.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: data,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
export {DownloadCreate,getDownloadCount,getBrowserData};