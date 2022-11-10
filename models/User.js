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

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }
    },

   //add hook for password hash

    sequelize,
    underscore: true,
    modelName: 'user',
    timestamps: true,

})

module.exports = User;