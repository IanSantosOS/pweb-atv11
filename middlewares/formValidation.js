const { hasEmail, hasUsername } = require('../models/accountsModel');
const { isEmail } = require('validator');

const loginValidation = ({ body }, res, next) => {
  if (!body?.username_email?.trim() || !body?.pass?.trim()) {
    return res.status(400).json({ message: 'Insira um usuário e senha' });
  }

  next();
};

const signupValidation = ({ body }, res, next) => {
  const message = {};

  if (!body?.username?.trim()) {
    message.username = 'Nome de usuário é obrigatório e não pode ser vazio';
  }
  else if (validateUsername(body.username)) {
    message.username = validateUsername(body.username);
  }

  if (body?.email && validateEmail(body.email)) {
    message.email = validateEmail(body.email);
  }

  if (!body?.pass?.trim()) {
    message.pass = 'Senha é obrigatória e não pode ser vazia';
  }
  else if (validatePassword(body.pass)) {
    message.pass = validatePassword(body.pass);
  }

  if (!body?.pass_confirm?.trim()) {
    message.pass_confirm = 'Confirmação de senha é obrigatória e não pode ser vazia';
  }
  else if (body.pass !== body.pass_confirm) {
    message.pass_confirm = 'As senhas não coincidem (não são as mesmas)';
  }

  if (Object.values(message).length !== 0) {
    return res.status(400).json({ message });
  }

  next();
};

const validateUsername = (username) => {
  if (hasUsername(username)) {
    return 'Usuário já existente';
  }

  if (username.trim().replace(/ +/g, '') !== username) {
    return 'Nome de usuário não deve conter espaços';
  }

  if (username.includes('@') || username.includes('?') || username.includes('!')) {
    return 'Nome de usuário não deve conter @, ? ou !';
  }

  if (username !== username.normalize("NFD").replace(/[\u0300-\u036f]/g, '')) {
    return 'Nome de usuário não deve conter pontuação (á, ã, ü, etc)';
  }
};

const validateEmail = (email) => {
  if (hasEmail(email)) {
    return 'Este email já está em uso';
  }

  if (!isEmail(email)) {
    return 'Email inválido.';
  }
};

const validatePassword = (pass) => {
  if (pass.length < 4) {
    return 'A senha tem que ter no mínimo 4 dígitos.';
  }
};

module.exports = {
  loginValidation,
  signupValidation
}
