import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
}); 

const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) return null;
        // Upload the image to Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: 'auto'
        })
        //file has been uploaded successfully
        console.log('File uploaded to Cloudinary successfully', response.url);
        
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }

        return response;
    } catch(error){
        // fs.unlinkSync(localFilePath);
        console.log("=== CLOUDINARY UPLOAD ERROR ===");
        console.error(error);
        console.log("===============================");
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }
        return null;
        //removes the locally saved temporary file as the upload operation got failed
    }
}

export { uploadOnCloudinary }