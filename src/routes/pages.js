const express = require('express');
const router = express.Router();

router.get('/', (_req, res) => res.render('index'));

router.get('/login', (req, res) => {
  if (req?.session?.login) {
    res.redirect('/homepage');
  } else {
    res.render('login');
  }
});

router.get('/signup', (req, res) => {
  if (req?.session?.login) {
    res.redirect('homepage');
  } else {
    res.render('signup');
  }
});

router.get('/homepage', (req, res) => {
  if (!req?.session?.login) {
    res.redirect('login');
  } else {
    res.render('homepage', { username: req.session.login.username });
  }
});

module.exports = router;
