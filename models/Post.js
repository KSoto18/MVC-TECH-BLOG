const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncement: true,
        allowNull: false,
        primaryKey: true,
    },

    comment_title: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    body: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        //add reference to user
    },

    sequelize,
    underscore: true,
    modelName: 'post',

})

module.exports = Post;