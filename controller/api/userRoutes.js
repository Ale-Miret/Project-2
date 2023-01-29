const router = require('express').Router();
const express = require('express');
const bcrypt = require('bcrypt');
const sequelize = require('sequelize');
const session = require('express-session');
const withAuth = require('../../utils/auth');
const User = require('../../model').User;

router.get('/profile', withAuth, (req, res) => {

    res.render('profile');
});


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
                console.log(result);
                console.log(err);
                if(result) {
                    req.session.user = user.email;
                    req.session.save(() => {
                        req.session.email = user.email;
                        req.session.logged_in = true;

                        res.redirect('/profile');
                        // res.status(200).json(userData);
                      });
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
            res.redirect('/login');
            res.json({
                message: 'Successfully logged out!'
            });
        }
    });
});

router.post('/', async (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    try {
        const newUserSignup = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });

        req.session.save(() => {
            req.session.email = newUserSignup.email;
            req.session.logged_in = true;

            res.redirect('/profile');
        });
       
    } catch (error) {
        res.status(400).json(error);
    }
})

// signup routes for new user
// router.post('/signup', (req, res) => {
//     const hashedPassword = bcrypt.hashSync(req.body.password, 10);

//     User.create({       
//         name: req.body.name,
//         email: req.body.email,
//         password: hashedPassword,
//     })
//     .then((user) => {
//         req.session.user = email;
//         res.render('/profile');
//         res.json({
//             message: 'Sign up Successful!'
//         })
//     })
//     .catch((error) => {
//         res.json({
//             message: 'An error occurred, please try again!'
//         });
//     });
// });
module.exports = router;
