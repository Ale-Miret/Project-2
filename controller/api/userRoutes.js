const router = require('express').Router();
const express = require('express');
const bcrypt = require('bcrypt');
const sequelize = require('sequelize');
const session = require('express-session');
const User = require('../../model').User;

router.get('/profile', (req, res) => {

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
                if(result) {
                    req.session.user = email;
                    res.redirect('/profile');
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
        // res.status(200).json(newUserSignup);
        res.redirect('/profile');
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