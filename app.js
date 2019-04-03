const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');

const app = express();
const router = express.Router();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

app.post('/login', (req, res) => {

})

app.post('/create', (req, res) => {

})

app.post('/user/:userId/match/:matchId/favorite', (req, res) => {

})

app.get('/user/:userId/favorites', (req, res) => {

})

app.post('/user/:userId/match/:matchId/rate', (req, res) => {

})

app.get('/user/ratings', (req, res) => {

})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


module.exports = app;