const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
const dbModel = require('../../model');
const withAuth = require('../../utils/auth');
const Review = require('../../model').Review;

// get route for all reviews
router.get('/', (req, res) => {
    Review.findAll().then((reviews) => {
        res.json(reviews);
    });
});

// get route for review by id
router.get('/:id', (req, res) => {
    Review.findByPk(
        req.params.id,
    ).then((review) => {
        res.json(review);
    });
});

router.post('/', withAuth, (req, res) => {
    Review.create({
        movie_name: req.body.movie_name,
        review_comment: req.body.review_comment,
        rating: req.body.rating,
    }).then((review) => {
        res.json(review);
    });
});

router.put('/:id', withAuth, (req, res) => {
    Review.update({
        review_comment: req.body.review_comment,
        rating: req.body.rating,
    },{
        where: {
            id: req.params.id,
            user_id: req.params.user.id,
        }
    }.then((updatedReview) => {
        res.json(updatedReview);
    }));
});

router.delete('/:id', withAuth, (req, res) => {
    Review.destroy({
        where: {
            id: req.params.id,
            user_id: req.user.id,
        }
    }).then((deletedReview) => {
        res.json(deletedReview);
    });
});

module.exports = router;
