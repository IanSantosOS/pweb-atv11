const express = require('express');
const router = express.Router();

const accountsModel = require('./models/accountsModel');

router.get('/', (req, res) => res.render('index'));
router.post('/', (req, res) => res.send(accountsModel.verifyUser(req.body)));

module.exports = router;
