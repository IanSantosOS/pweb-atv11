const express = require('express');
const router = express.Router();

const accountsModel = require('./models/accountsModel');

router.get('/', (req, res) => res.render('index'));

router.get('/login', (req, res) => res.render('login'));
router.post('/login');

router.get('/signup', (req, res) => res.render('signup'));
router.post('/signup');

router.get('/homepage', (req, res) => res.render('homepage'));

module.exports = router;
