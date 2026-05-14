import Contact_modules from "../modules/Contact_modules.js";

const create=async (req,res)=>{
    try {
        const exist=await Contact_modules.findOne({email:req.body.email});
        if(exist){
            return res.status(400).json({
                success:false,
                message:"❌ Email already exists",
            });
        }
        const response=await Contact_modules.create(req.body);
        res.status(200).json({
            success:true,
            message:"✅ Contact form submitted successfully",
            data:response,
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"❌ Failed to submit contact form",
            error:error.message,
        });
    }
}

export {create};