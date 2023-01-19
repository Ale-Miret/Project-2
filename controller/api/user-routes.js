const router = require('express').Router();
const { User } = require('../../models/User');

router.post('/', async (req, res) => {
    try {
       const dbUserData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
       });
        req.session.save(() => {
            req.session.user_id = dbUserData.id; 
            req.session.loggedIn = true;
            
            res.status(200).json(dbUserData);
     });
    } catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                req.body.user_email
            },
        });
        if(!dbUserData) {
            res
              .status(400)
              .json({ message: 'Incorrect Email or Password Entered!' })
              return;
        }
        const validPassword = await dbUserData.checkPassword(req.body.password);

        if(!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect Email or Password Entered!' })
        return;
        }

        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.loggedIn = true;

            res.json({ user: dbUserData, message: 'You are now logged in!' });
        });

    } catch(err) {
        res.status(400).json(err);
        console.log(err);
    }
});

router.post('/logout', (req, res) => {
    if(req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;