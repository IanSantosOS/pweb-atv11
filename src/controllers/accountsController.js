const accountsModel = require('../models/accountsModel');

const createUser = ({ body }, res) => {
  accountsModel.createUser({
    username: body.username,
    role: 'user',
    email: body.email.toLowerCase(),
    pass: body.pass
  });
  return res.status(204).json();
};

const getAll = (_req, res) => {
  return res.status(200).json(accountsModel.getAll());
}

const deleteUser = (req, res) => {
  accountsModel.deleteUser(req.params.user);
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
  loginUser,
  getAll
};
