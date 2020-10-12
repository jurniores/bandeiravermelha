const express = require('express');
const route = express.Router();

//meus controles

//users
const userController = require('./src/controllers/userControllers/useController');
const loginController = require('./src/controllers/loginController/loginController');
//posts
const postController = require('./src/controllers/postController/postController');
const postControllerADM = require('./src/controllers/postController/postControllerADM');
//views
const viewsController = require('./src/controllers/viewsController/viewsController');
const requiredLogin = require('./src/middleware/middleware');
//Fotos
const fotosController = require('./src/controllers/FotosController/fotosController');
//Tags
const tagsControlller = require('./src/controllers/TagsController/TagsController');
//middlewareMULTER

const uploadMulter = require('./src/middleware/uploadMulter');

//user
route.post('/register', userController.store)
route.put('/register/:id', requiredLogin, userController.updated)
route.get('/register', userController.index)
route.delete('/register/:id', requiredLogin, userController.delete)




route.post('/login', loginController.login)

//post
route.get('/posts', postController.index)
route.post('/posts', requiredLogin, postController.store)
route.get('/posts/:slug', postController.show)
route.delete('/posts/:id', requiredLogin, postController.delete)
route.put('/posts/:id',requiredLogin, postController.updated)

route.get('/search/:title', postController.Search)
route.get('/tipos/:tipo', postController.tipos)

route.get('/postadm/:id', postControllerADM.index)


//views
route.get('/views',requiredLogin, viewsController.index)
route.post('/views',requiredLogin, viewsController.store)
route.put('/views/:id', viewsController.updated)
route.delete('/views/:id',requiredLogin, viewsController.delete)
route.get('/views/:id', viewsController.show)

//tags
route.get('/tags', tagsControlller.index);
route.get('/tags/:id', tagsControlller.show);
route.post('/tags', tagsControlller.store);
route.put('/tags/:id', tagsControlller.updated);
route.delete('/tags/:id', tagsControlller.delete);

route.post('/images', uploadMulter)
route.get('/images', fotosController.index)

module.exports = route;