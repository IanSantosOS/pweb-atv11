const express = require('express');
const router = express.Router();

const admValidation = require('../middlewares/admValidation');
const accountsController = require('../controllers/accountsController');

router.use('/', admValidation.isAdm);

router.get('/users', accountsController.getAll);

router.delete('/delete/:user', admValidation.verifyUserToDelete, accountsController.deleteUser);

module.exports = router;
