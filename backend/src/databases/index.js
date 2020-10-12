const {Sequelize} = require('sequelize');

const User = require("../models/UserModel/UserModel");
const Post = require('../models/PostsModel/PostsModel');
const Views = require('../models/ViewsModel/ViewsModel');
const Fotos = require('../models/FotosModel/FotosModel');
const Tags = require('../models/TagsModel/TagsModel');

const databaseConfig = require('../config/databases');

const models = [User, Post, Views, Fotos, Tags]


const connection = new Sequelize(databaseConfig);

models.forEach((models)=>models.Init(connection))
Fotos.associate(Post)
User.associate(Post)
Post.associate({ User,Views, Fotos, Tags })

