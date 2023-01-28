const User = require('./User');
const Review = require('./Review');


User.hasMany(Review, { foreignKey:'id', targetKey:'user_id' });
Review.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id' });

module.exports = {
    User,
    Review
}