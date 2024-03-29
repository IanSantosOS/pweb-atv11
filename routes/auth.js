const express = require('express');
const router = express.Router();

const formValidation = require('../middlewares/formValidation');
const accountsController = require('../controllers/accountsController');

router.post('/login', formValidation.loginValidation, accountsController.loginUser);

router.post('/signup', formValidation.signupValidation, accountsController.createUser);

router.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      res.status(500).send('Erro ao tentar sair da conta');
    } else {
      res.redirect('/');
    }
  });
});

module.exports = router;
