import DownloadResume_module from "../modules/DownloadResume_module.js";

const DownloadCreate=async(req,res)=>{
    try {
        const increment=1;
        const download_resume=await DownloadResume_module.create({
            download_count:increment
        });
        res.status(200).json({
            success:true
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
}

const getDownloadCount=async(req,res)=>{
    try {
        const totalCount=await DownloadResume_module.find();
        res.status(200).json({
            success:true,
            count:totalCount.length
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
}

export {DownloadCreate,getDownloadCount};