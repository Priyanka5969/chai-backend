import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

cloudinary.config({ 
    cloud_name: 'dl85yhn4n', 
    api_key: '852595816434371', 
    api_secret: 'TQyS8VXZN_yYIADA8nPdo9NhoPg'
});

const uploadOnCloudinary = async(localFilePath) => {
    try{
        if(!localFilePath) return null;

        //upoad on cloudinary
        const response = await cloudinary.uploader.upload(
            localFilePath, {
                resource_type: "auto"
            }
        )

        // file has been uploaded successfully
        console.log("file is uploaded on cloudinary", response.url);
        fs.unlinkSync(localFilePath); 
        console.log(response,"response in cloudinary");
        return response;
    }catch(error){
        fs.unlinkSync(localFilePath); // remove the locally saved temporary file as upload operation got failed
        return null;
    }
}

export {uploadOnCloudinary};