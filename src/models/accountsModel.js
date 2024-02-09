const accounts = [
  { user: 'user',    email: 'user@gmail.com',    pass: 'user' },
  { user: 'admin',   email: 'admin@gmail.com',   pass: 'admin' },
  { user: 'leo',     email: 'leo@gmail.com',     pass: '123456' },
  { user: 'kenji',   email: 'kenji@gmail.com',   pass: '987654' },
  { user: 'wladia',  email: 'wladia@gmail.com',  pass: '1A2B3C' },
  { user: 'ricardo', email: 'ricardo@gmail.com', pass: 'A1B2C3' }
];

const createUser = (newUser) => {
  accounts.push(newUser);
};

const deleteUser = (user) => {
  accounts.splice(1, accounts.indexOf(account => {
    return accounts.user === user.user && accounts.email === user.email && accounts.pass === user.pass;
  }));
};

const verifyUser = ({ user_email, pass }) => {
  if (accounts.includes(account => account.pass === pass && (account.user === user_email || account.email === user_email))) {
    return true;
  }
  return false;
};

module.exports = {
  createUser,
  deleteUser,
  verifyUser
};
