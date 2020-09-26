const multer = require('multer');
const configMulter = require('../config/configMulter');
const upload = multer(configMulter).single('foto')
const Fotos = require("../models/FotosModel/FotosModel");


module.exports = async (req, res)=>{
    upload(req, res, async err=>{
            const { filename } = req.file;
            const { id_post } = req.body;
        try{
            const existe = await Fotos.findOne({
                where:{id_post}
            })
            if(existe) {
                 res.status(400).json({
                    Errors: ['Já existe foto linkada nessa postagem']
                })
                return 
                 
            }
            
            try{
                const fotos = await Fotos.create({name: filename, id_post})
                return res.json(fotos)
        
            }catch(e){
                res.status(400).json({
                    Errors: ['Erro no salvamento da foto']
                })
            }
            
        }catch(e){
            res.status(400).json({
                Errors: err
            })
        }
    })
   
}