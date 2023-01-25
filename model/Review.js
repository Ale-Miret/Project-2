const bcrypt = require('bcrypt');
// const express = require('express');
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    movie_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 10,
        }
    },
    review_comment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'review',
},{
user_id: {
    type: DataTypes.INTEGER,
    references: {
        model: 'user',
        key: 'id',
    }
},
}
);

module.exports = Review;