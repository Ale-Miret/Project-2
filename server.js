const express = require('express');
const session = require('express-session');
const routes = require('./controller');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

