const fs = require("fs");
const { resolve } = require('path');
const Post = require('../../models/PostsModel/PostsModel');
const View = require('../../models/ViewsModel/ViewsModel');
const Fotos = require('../../models/FotosModel/FotosModel');
const Sequelize = require('sequelize');

const Op = Sequelize.Op


module.exports = {
    async  store(req, res) {
        try{
             const post = await Post.create(req.body)
            res.status(200).json({
                success: {post}
            })
            await View.create({ view: 1, id_post: post.id})
        }
        catch(e) {
            res.status(400).json(e)
        }
    },

    async index(req, res) {
        try {
            const posts= await Post.findAll({
                attributes:['id','title', 'slug', 'author', 'desc', 'tipo', 'text', 'user_id', 'created_at'],
                order:[['id','desc']],
                include: [{
                    model: View
                },{
                    model: Fotos,
                    attributes: ["name"]
                }]
    
            })
            if(!posts){
                return res.status(400).json({
                    Error: ['Não existe postagem!']
                })
            }
            
            res.status(200).json(posts)
        } catch (e) {
            res.status(400).json(e)
        }
    },

    async tipos(req, res) {
        try {
            const { tipo } = req.params;

                const posts= await Post.findAll({
                    where: { tipo },
                    attributes:['id','title', 'slug', 'author', 'desc', 'tipo', 'text', 'user_id', 'created_at'],
                    order:[['id','desc']],
                    include: [{
                        model: View
                    },{
                        model: Fotos,
                        attributes: ["name"]
                    }]
                })
                if(!posts){
                    return res.status(400).json({
                        Error: ['Não existe postagem!']
                    })
                }
                
                res.status(200).json(posts)
            
        } catch (e) {
            res.status(400).json(e)
        }
    },
    async show(req, res) {
        const { slug } = req.params;
        try {
            const posts= await Post.findOne({
                where: {slug: slug},
                attributes:['id','title', 'slug', 'author', 'desc', 'tipo', 'text', 'user_id', 'created_at'],
                include: [{
                    model: View
                },{
                    model: Fotos,
                    attributes: ["name"]
                }]

            })
            if(!posts){
                return res.status(400).json({
                    Error: ['Não existe postagem!']
                })
            }
            res.status(200).json(posts)
            
        } catch (e) {
            res.status(400).json(e)
        }
    },
    async delete(req, res) {
        const { id } = req.params;
        try {
            const posts= await Post.findOne({
                where:{id},
                include: {model: Fotos}
            })
            
            
            if(!posts){
                return res.status(400).json({
                    Error: ['Não existe postagem!']
                })
            }
            
            if(posts.Foto !== null){
                await fs.unlink(('./uploads/images/'+posts.Foto.name), (err)=>{
                    if(err){
                        return res.status(400),json({
                            Errors:err
                        })
                    }
                })
            }
              
            
            
           
            await posts.destroy()
            res.status(200).json({
                success:['Postagem exclúida com sucesso']
            })
        } catch (e) {
            res.status(400).json(e)
        }
    },
    async updated(req, res) {
        const { id } = req.params;
        
        try {
            const posts= await Post.findByPk(id)
            if(!posts){
                return res.status(400).json({
                    Error: ['Não existe postagem!']
                })
            }
            const newPost = await posts.update(req.body)
            res.status(200).json(newPost)
        } catch (e) {
            res.status(400).json(e)
        }
    },

    async Search (req, res) {
        const { title } = req.params;
        

            try {
                const posts= await Post.findAll({
                    
                    where: {title: {
                        [Op.like]: `%${title}%`
                      } },
                      
                    attributes:['id','title', 'slug', 'author', 'desc', 'tipo', 'text', 'user_id'],
                    order:[['id','desc']],
                    include: [{
                        model: View
                    },{
                        model: Fotos,
                        attributes: ["name"]
                    }] 
                    
                })
                if(!posts || posts.length===0){
                    return res.status(400).json({
                        Error: ['Não existe postagem!']
                    })
                }
            
                
                res.status(200).json(posts)
            } catch (e) {
                res.status(400).json(e)
            }
    
        
        
    }
    
    

}