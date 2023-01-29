const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const PORT = process.env.port || 3001;
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');
const routes = require('./controller');
const path = require('path');
const bcrypt = require('bcrypt');




const sess = {
    secret: 'Super secret secret',

    cooke: {
        maxAge: 60 * 60 * 1000,
        httpOnly: true,
        secure: false,
    },
    resave: 'false',
    saveUninitialized: 'true',
    store: new SequelizeStore({
        db: sequelize
    })
}

// use session
app.use(session(sess));    

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ encodedUrl: true }));

app.use(express.static(path.join(__dirname, 'public')));

// use routes from controller folder
app.use(routes);

app.get('/' , async (req, res) => {
    res.render('main')
});

app.get('/login' , async (req, res) => {
    res.render('login')
});

app.get('/profile', async (req, res) => {
    res.render('profile')   
});

// app.post("/login", async (req, res) => {
//     const hashedPassword = bcrypt.hashSync(req.body.password, 10);
//     try {
//       const newLogin= await User.create({
//         name: req.body.name,
//         email: req.body.email,
//         password: hashedPassword,
//       });
//       res.redirect("/profile");
//     } catch (err) {
//       res.status(500).send(err);
//     }
//   });

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`))
});

