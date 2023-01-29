const bcrypt = require('bcrypt');
const express = require('express');
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection');

class User extends Model {}

User.init({
    username: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User',
},  {
    hooks: {
        beforeCreate: (user) => {
            user.password = bcrypt.hash(user.password, 10);
        }
    }
})

module.exports = User;