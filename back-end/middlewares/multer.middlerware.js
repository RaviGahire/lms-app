const multer = require('multer')

const storage = multer.diskStorage({

    destination: (req, file, callback) => {

        callback(null, './public/uploads')
    },

    filename: (req, file, callback) => {
        
        callback(null, file.fieldname + "_" + file.originalname)
    }
})


// const fileFilter = (req, file, cb) => {
//     if (file.mimetype.startsWith("image/")) {
//         cb(null, true)
//     } else {
//         cb(new Error("Only images are allowed"), false)
//     }
// }


const upload = multer({ 
    storage: storage , 
    limits:{
         fileSize: 5 * 1024 * 1024 // 5MB
    }

 })

module.exports = upload