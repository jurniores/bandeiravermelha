const {Sequelize, Model } = require('sequelize');
const { belongsTo } = require('../UserModel/UserModel');



module.exports = class Tags extends Model {
    static Init(sequelize){
        super.init({
            tags: {
                type: Sequelize.STRING,
                defaultValue: '',
            },
            id_post: {
                type: Sequelize.INTEGER
            }
        },{sequelize});
        
    }
    static associate(models){
        belongsTo(models, {foreignKey: 'id_post'})
    }
}

