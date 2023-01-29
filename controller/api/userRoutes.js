const router = require('express').Router();
const express = require('express');
const bcrypt = require('bcrypt');
const sequelize = require('sequelize');
const session = require('express-session');
const User = require('../../model').User;

// login routes
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email,
        }
    })
    .then(user => {
        if(user) { 
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if(result) {
                    req.session.user = user;
                    res.redirect('/dashboard');
                } else {
                    res.json({
                        message: 'Incorrect Email or Password!'
                    });
                }
            });
        } else {
            res.json({
                message: 'Incorrect Email or Password!'
            });
        }
    })
    .catch(error => {
        res.json({
            message: 'An Error Occurred!'
        });
    });
});

// user logout route
router.post('/logout', (req, res) => {
    req.session.destroy((error) => {
        if(error) {
            res.json({
                message: 'An error again, please try again!'
            });
        } else { 
            res.redirect('/');
            res.json({
                message: 'Successfully logged out!'
            });
        }
    });
});


// signup routes for new user
router.post('/signup', (req, res) => {
    User.create({
        email: req.body.email,
        password: req.body.password,
    })
    .then(user => {
        req.session.user = user;
        res.json({
            message: 'Sign up Successful!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occurred, please try again!'
        });
    });
});


module.exports = router;
