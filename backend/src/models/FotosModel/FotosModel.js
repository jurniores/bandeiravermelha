const {Sequelize, Model} = require('sequelize');



module.exports = class Fotos extends Model {
    static Init(sequelize){
        super.init({
            name: {
                type: Sequelize.STRING,
            },
            id_post: {
                type: Sequelize.INTEGER,
            }

        },{sequelize})
    
    }
    static associate(models){
        this.belongsTo(models, { foreignKey: 'id_post'})
    }
}

