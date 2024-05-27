const cloudinary = require("cloudinary").v2
const multer = require("multer")
const { CloudinaryStorage } = require("multer-storage-cloudinary")


cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        allowed_formats: ["jpg", "png"],
        folder: "movie-gallery"
    }
})

const multerInstance = multer({ storage })

const imageUploadMiddleware = multerInstance.single("imageUrl")
module.exports = { imageUploadMiddleware }