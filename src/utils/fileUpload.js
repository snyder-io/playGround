const v2 = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
});

module.exports.uploadImage = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        //upload the file
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });
        //file has been uploaded successfully
        console.log("File uploaded successfully",
            response.url
        );
        return response;

    } catch (error) {
        //remove the local temp file as the upload operation got failed
        fs.unlinkSync(localFilePath);
        return null;
    }
}
