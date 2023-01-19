const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Movie extends Model {}

Movie.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        movie_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        movie_year: {
          type: DataTypes.INTEGER,   
        },
        movie_rating: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        movie_time: {
            type: DataTypes.TIME,
        },  
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'movie',
    }
);

module.exports = Movie;