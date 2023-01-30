const { Review } = require('../model');

const reviewData = [
    {
        movie_name: "test",
        rating: 5,
        review_comment: "testtesttesttest",
        user_id: 1,
    },
    {
        movie_name: "test2",
        rating: 9,
        review_comment: "testesttesttesttest",
        user_id: 2,
    }
];

const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;