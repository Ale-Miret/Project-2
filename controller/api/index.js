const router = require('express').Router();
const reviewRoutes = require('./reviewRoutes');
const userRoutes = require('./userRoutes');

router.use('/review', reviewRoutes);
router.use('/user', userRoutes);


module.exports = router;