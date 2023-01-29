const { Review } = require('../model');

const reviewData = [
    {
        movie_name: "test",
        rating: 7,
        review_comment: "testtesttesttesttesttesttest",
        user_id: 1,
    },
    {
        movie_name: "test",
        rating: 9,
        review_comment: "testtesttesttesttesttesttest",
        user_id: 2,
    },
    {
        movie_name: "test",
        rating: 5,
        review_comment: "testtesttesttesttesttesttest",
        user_id: 1,
    },
    {
        movie_name: "test",
        rating: 3,
        review_comment: "testtesttesttesttesttesttest",
        user_id: 2,
    },
]

const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;