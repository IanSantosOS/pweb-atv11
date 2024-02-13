const express = require('express');
const router = express.Router();

const formValidation = require('../middlewares/formValidation');
const accountsController = require('../controllers/accountsController');

router.post('/login', formValidation.loginValidation, accountsController.loginUser);
router.post('/signup', formValidation.signupValidation, accountsController.createUser);
router.post('/logout', (req, _res) => req.session.login = undefined);

module.exports = router;
