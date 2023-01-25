const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
const dbModel = require('../../model');
const withAuth = require('../../utils/auth');
const Review = require('../../model').Review;

// get route for all reviews
router.get('/', (req, res) => {
    dbModel.Review.findAll().then(reviews => {
        res.json(reviews);
    });
});

// get route for review by id
router.get('/:id', (req, res) => {
    dbModel.Review.findByPk(
        req.params.id,
    ).then(review => {
        res.json(review);
    });
});

router.post('/', withAuth, (req, res) => {
    dbModel.Review.create({
        movieId: req.body.movie_id,
        userId: req.body.user.id,
        reviewComment: req.body.review_comment,
        rating: req.body.rating,
    }).then(review => {
        res.json(review);
    });
});

router.put('/:id', withAuth, (req, res) => {
    dbModel.Review.update({
        reviewComment: req.body.review_comment,
        rating: req.body.rating,
    },{
        where: {
            id: req.params.id,
            userId: req.params.user.id,
        }
    }.then(updatedReview => {
        res.json(updatedReview);
    }));
});

router.delete('/:id', withAuth, (req, res) => {
    dbModel.Review.destroy({
        where: {
            id: req.params.id,
            userId: req.user.id,
        }
    }).then(deletedReview => {
        res.json(deletedReview);
    });
});

module.exports = router;
