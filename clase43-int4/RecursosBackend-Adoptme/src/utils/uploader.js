// import __dirname from "./index.js";
const multer = require('multer')

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        // file.fieldname === 'documents' -> validación de los input <input type='text' name='documents'>
        // 'uploader/uid/documents'
        // file.fieldname === 'profile'
        // 'uploader/uid/profile'
        // file.fieldname === 'products'
        // fs.mkdirsync('uid',{recursive: true})
        cb(null,`${__dirname}/../public/img`)
    },
    filename:function(req,file,cb){
        // cb(null,`${userId}-${file.originalname}`)
        cb(null,`${Date.now()}-${file.originalname}`)
    }
})

const uploader = multer({storage})

module.exports =  {
    uploader
}

// librería para crear carpetas -> fs
// documente > 3 user premiun 
// router.post('/api/users/:uid/documents',uploader.array('ducuments', 5),(req, res)=>{
    // req.file
// })

// User.document.length >= 3