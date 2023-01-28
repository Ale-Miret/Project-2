const router = require('express').Router();
const express = require('express');
const bcrypt = require('bcrypt');
const sequelize = require('sequelize');
const session = require('express-session');

// home route to homepage
router.get('/', (req, res) => {
    console.log(req);
    res.render('homepage', {});

});



module.exports = router;