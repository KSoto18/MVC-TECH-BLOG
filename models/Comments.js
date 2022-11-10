const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncement: true,
        allowNull: false,
        primaryKey: true,
    },

    comment: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        //add references to user
    },

    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        //add reference to post
    },

    sequelize,
    underscore: true,
    modelName: 'comment',

})

module.exports = Comment;