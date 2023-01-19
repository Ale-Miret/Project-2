const router = require('express').Router();
const { User } = require('../models/User');

router.post('/', async (req, res) => {
    try {
       const dbUserData = await User.create({
        username: req.body.username,
        email: req.body.user_email,
        password: req.body.user_pw,
       });
        req.session.save(() => {
        req.session.loggedIn = true;

        res.status(200).json(userDbData);
     });
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                req.body.user_email,
            },
        });
        if(!dbUserData) {
            res
              .status(400)
              .json({ message: 'Incorrect Email or Password Entered!' })
              return;
        }
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
})