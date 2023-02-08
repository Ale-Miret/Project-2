const router = require('express').Router();
const express = require('express');
const bcrypt = require('bcrypt');
const sequelize = require('sequelize');
const session = require('express-session');
const movier = require('movier');
// home route to homepage
router.get('/', async(req, res) => {
    // console.log(await movier.getTitleDetailsByName("interstellar 2014"));
    res.render('login', {
        layout: 'main'
    })
});

router.get('/api/moviesearch/:query' , async(req, res) => {
    res.json(await movier.getTitleDetailsByName (req.params.query)) 
})

module.exports = router;