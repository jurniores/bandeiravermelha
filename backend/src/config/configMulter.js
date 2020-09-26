const multer = require('multer');
const { extname, resolve } = require('path');


const aleatorio = () => Math.floor(Math.random() * 100000000 + 100000000);


module.exports = {
     fileFilter: async (req, file, cb) => {
         if(file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg'){
             
             return cb(new multer.MulterError('Arquivo precisa ser png ou jpeg'))
         }
         return cb(null, true)
     },
     storage: multer.diskStorage({
         destination: (req, file, cb) =>{
            cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
            
         },
         filename: (req, file, cb) => {
             cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`)
         },
     }),
};