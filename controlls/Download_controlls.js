import DownloadResume_module from "../modules/DownloadResume_module.js";

const DownloadCreate = async (req, res) => {
  try {
    const { userType } = req.body;
    const response = await DownloadResume_module.create({
        userType,
        userCount: 1,
      });

    res.status(200).json({
      success: true,
      message: "Download count updated successfully",
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

    const counts = await DownloadResume_module.find();

    res.status(200).json({
      success: true,
      data: counts,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
export {DownloadCreate,getDownloadCount,getBrowserData};