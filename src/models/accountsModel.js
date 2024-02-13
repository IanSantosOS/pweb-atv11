const accounts = [
  { username: 'user',    role: 'user',  email: 'user@gmail.com',    pass: 'user' },
  { username: 'admin',   role: 'admin', email: 'admin@gmail.com',   pass: 'admin' },
  { username: 'leo',     role: 'user',  email: 'leo@gmail.com',     pass: '123456' },
  { username: 'kenji',   role: 'user',  email: 'kenji@gmail.com',   pass: '987654' },
  { username: 'wladia',  role: 'user',  email: 'wladia@gmail.com',  pass: '1A2B3C' },
  { username: 'ricardo', role: 'user',  email: 'ricardo@gmail.com', pass: 'A1B2C3' }
];

const createUser = (newUser) => {
  accounts.push(newUser);
};

const deleteUser = (user) => {
  accounts.splice(1, accounts.indexOf(account => {
    const userValue = user?.username ? account.username === user.username : account.email === user.email;
    return userValue && account.pass === user.pass;
  }));
};

const verifyUser = ({ username_email, pass }) => {
  username_email = username_email.toLowerCase();
  return accounts.find(account => {
    return account.pass === pass &&
    (account.username.toLowerCase() === username_email || account.email.toLowerCase() === username_email)
  });
};

const hasUsername = (username) => {
  return accounts.some(account => account.username.toLowerCase() === username.toLowerCase());
}

const hasEmail = (email) => {
  return accounts.some(account => account.email.toLowerCase() === email.toLowerCase());
}

module.exports = {
  createUser,
  deleteUser,
  verifyUser,
  hasUsername,
  hasEmail
};
