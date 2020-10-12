const Tags = require("../../models/TagsModel/TagsModel");
const { show } = require("../postController/postController");


module.exports = {
    async index(req, res){
        
        try{
            const tags = await Tags.findAll()

            if(!tags.length>0){
                res.status(400).json({
                    Error: ['Não existe tags']
                })
            }
            res.status(200).json(tags)
        }catch(e){
            res.status(400).json(e)
        }


    },
    async store(req,res){
        
        try{
            const tags = await Tags.create(req.body)
            res.status(200).json(tags)
        }catch(e){
            res.status(400).json(e)
        }
    },

    async show(req, res){
        const {id} = req.params;

        try{
            const tags = await Tags.findByPk(id)

            if(!tags){
                res.status(400).json({
                    Error: ['Não existe tags']
                })
            }

            res.status(200).json(tags)
        }catch(e){
            res.status(400).json(e)
        }


    },
    async updated(req, res){
        const {id} = req.params;
    
        try{
            const tags = await Tags.findByPk(id)

            if(!tags){
                res.status(400).json({
                    Error: ['Não existe tags']
                })
            }
            const editTag = await tags.update(req.body)
            res.status(200).json(editTag)
        }catch(e){
            res.status(400).json(e)
        }


    },
    async delete(req, res) {
        const {id} = req.params;
        try{
            const tags = await Tags.findByPk(id)
            if(!tags){
                res.status(400).json({
                    Error: ['Não existe tags']
                })
            }
            await tags.destroy()
            res.status(200).json({
                success:['Postagem deletada com sucesso']
            })
        } catch(e) {
            res.status(400).json(e)
        }
    }
}