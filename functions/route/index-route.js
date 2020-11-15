'use strict';
const express = require('express');
const router = express.Router();
var admin = require('firebase-admin');
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://interactive-classroom-594c6.firebaseio.com'
});

let sessionCookie = '';
function isEmail(email) {
    const regx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regx.test(email);
}
router.get('/login', (req, res) => {
   if(sessionCookie){
       return res.redirect('/dashboard');
   }
    res.render('login');
});
function checkCookiesMiddleware(req, res, next) {
    sessionCookie = req.cookies.session || '';

    admin
        .auth()
        .verifySessionCookie(sessionCookie, true)
        .then(decodedClaims => {
            req.decodedClaims = decodedClaims;
            return next();
        })
        .catch(error => {
            res.redirect('/login');
        });
}
router.get('/dashboard', checkCookiesMiddleware, function (req, res) {
    if (!req.decodedClaims) return;
    const uid = req.decodedClaims.uid;
    const name = req.decodedClaims.name;
    const avatarUrl = req.decodedClaims.picture;
    res.render('dashboard', { uid, name, avatarUrl });
});
router.route('/create').get(function (req, res) {
    res.render('slider');
});
router.route('/join').get(function (req, res) {
    res.render('join');
});
router.route('/register').get(function (req, res) {
    res.render('register');
});
router.route('/pricing').get(function (req, res) {
    res.render('pricing');
});
router.route('/').get(function (req, res) {
    res.render('index');
});
router.route('/sessionLogin').post((req, res) => {
    const idToken = req.body.idToken.toString();
    const expiresIn = 60 * 60 * 24 * 5 * 1000;

    admin
        .auth()
        .createSessionCookie(idToken, { expiresIn })
        .then(
            sessionCookie => {
                const options = { maxAge: expiresIn, httpOnly: true };
                res.cookie('session', sessionCookie, options);
                res.end(JSON.stringify({ status: 'success' }));
            },
            error => {
                res.status(401).send('UNAUTHORIZED REQUEST!');
            }
        );
});
router.route('/sessionLogout').get((req, res) => {
    res.clearCookie('session');
    res.redirect('/login');
});

module.exports = router;
