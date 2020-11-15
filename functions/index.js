'use strict';
const functions = require('firebase-functions');
const express = require('express');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const path = require('path');
const app = express();
const indexRouter = require('./route/index-route');

app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const csrfMiddleware = csrf({ cookie: true });
app.use(csrfMiddleware);

app.all('*', (req, res, next) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    next();
});
app.use('/', indexRouter);

app.all('*', (req, res) => {
    res.send('Error 404 Not Found');
});
exports.app = functions.https.onRequest(app);
