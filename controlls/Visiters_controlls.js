import Visiter_module from "../modules/Visiter_module.js";

const visiterCreate=async(req,res)=>{
    try {
        const visiter=await Visiter_module.create({
            visiter_count:1
        });
        res.status(200).json({
            success:true,
            message:"Visiter count incremented"
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
}

const visitersCount=async(req,res)=>{
    try{
        const totalCount=await Visiter_module.find();
        res.status(200).json({
            success:true,
            count:totalCount.length,
        });
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
}

export {visiterCreate,visitersCount};