import app from"./app.js"
import cloudinary from "cloudinary" //to send file we use cloudinary
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_CNAME,
    api_key: process.env.CLOUDINARY_CLIENT_API,
    api_secret: process.env.CLOUDINARY_CLIENT_API_SECRET
})
app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT}`);
})