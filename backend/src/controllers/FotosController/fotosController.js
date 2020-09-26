const fs = require("fs");


//Meus módules
const Fotos = require('../../models/FotosModel/FotosModel');

module.exports ={
 
    async index (req, res){
        try{
            const fotos = await Fotos.findAll();
            res.json(fotos)
        } catch(e){
            res.status(400).json({
                Errors: ['Nao foi possível carregar as fotos']
            })
        }
    }
}