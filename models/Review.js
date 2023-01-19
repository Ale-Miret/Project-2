const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Review extends Model {}

Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        
    }
)