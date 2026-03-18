const cloudinary = require('cloudinary').v2
const { error } = require('console')
const fs = require('fs')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET_KEY
})

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            throw error
        }
        //upload on cloud
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        })
        //file uplaoded successfully
        console.log("file is uploaded on cloudinar", response.url)
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temp file if upload failed
        console.log(error)
        return null
    }
}

module.exports = uploadOnCloudinary