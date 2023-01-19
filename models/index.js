const Movie = require('./Movie');
const User = require('./User.js');
const Review = require('./Review');

User.hasMany(Movie, { foreignKey: movie_id });

Movie.belongsTo(User, { foreignKey: user_id });

Review.belongsTo(User, { foreignKey: user_id });

User.hasMany(Review, { foreignKey: review_id });

Review.belongsTo(Movie, { foreignKey: movie_id });

Movie.hasMany(Review, { foreignKey: review_id });


module.exports = {
    User,
    Movie,
    Review,
};

