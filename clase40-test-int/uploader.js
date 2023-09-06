import __dirname from "./index.js";
import dirname from 'path'
import multer from 'multer';
// console.log('dirname',`${__dirname}/public/img`)
// console.log(__dirname)
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,`${__dirname}/public/img`)
    },
    filename:function(req,file,cb){
        cb(null,`${Date.now()}-${file.originalname}`)
    }
})

const uploader = multer({storage})

export default uploader;