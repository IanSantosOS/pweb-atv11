const accountsModel = require('../models/accountsModel');

const createUser = ({ body }, res) => {
  accountsModel.createUser({ username: body.username, email: body.email, pass: body.pass })
  return res.status(204).json();
};

const deleteUser = ({ body }, res) => {
  return res.status(204).json();
};

const loginUser = (req, res) => {
  const result = accountsModel.verifyUser(req.body);

  if (!result) {
    return res.status(400).json({ message: 'Usuário ou senha incorretos!' });
  }

  req.session.login = result;
  return res.status(204).json();
};

module.exports = {
  createUser,
  deleteUser,
  loginUser
};
