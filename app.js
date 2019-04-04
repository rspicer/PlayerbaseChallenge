const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');

const app = express();
const router = express.Router();

const db = require('./models');

db.sequelize.sync().then(() => {
    console.log("DB Created/synced");
}).catch((err) => {
    console.error(err);
    process.exit(1);
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

app.post('/login', (req, res) => {
    const {
        email,
        password
    } = req.body;
    db.user.findAll({
        where: {
            email,
            password
        }
    }).then((res) => {
        res.json(res);
    }).catch((err) => {
        res.send(500);
    })
})

app.post('/create', (req, res) => {
    const {
        firstName,
        lastName,
        accountId,
        email,
        password
    } = req.body;

    db.user.create({
        firstName,
        lastName,
        accountId,
        email,
        password
    }).then((res) => {
        res.json(res)
    }).catch((err) => {
        //Should break this up into BadRequests, InternalErrors, etc.
        res.send(500);
    })
})

app.post('/user/:accountId/match/:matchId/favorite', (req, res) => {
    const accountId = req.params[0];
    const matchId = req.params[0];

    db.favorite.create({
        userAccountId: accountId,
        matchId
    }).then((res) => {
        res.json(res);
    }).catch((err) => {
        //Should break this up into BadRequests, InternalErrors, etc.
        res.send(500);
    })
})

app.get('/user/:accountId/favorites', (req, res) => {
    const accountId = req.params[0];

    db.favorite.findAll({
        attributes: ['matchId', ['userAccountId', 'accountId']],
        where: {
            accountId
        }
    })
})

// app.post('/user/:accountId/match/:matchId/rate', (req, res) => {

// })

// app.get('/user/ratings', (req, res) => {

// })

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


module.exports = app;