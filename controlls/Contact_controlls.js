import Contact_modules from "../modules/Contact_modules.js";

const create = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const exist = await Contact_modules.findOne({ email });
    if (exist) {
      return res.status(409).json({
        success: false,
        message: "❌ Email already exists",
      });
    }

    else
    {
     const response = await Contact_modules.create({
      name,
      email,
      message,
    });

  

    return res.status(201).json({
      success: true,
      message: "✅ Contact form submitted successfully",
      data: response,
    });
    }





  } catch (error) {


    return res.status(500).json({
      success: false,
      message: "❌ Failed to submit contact form",
      error: error.message,
    });
  }
};


export {create};