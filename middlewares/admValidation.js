function isAdm(req, res, next) {
  if (req?.session?.login?.role !== 'admin') {
    return res.status(403).json();
  }

  next();
}

function verifyUserToDelete(req, res, next) {
  if (req.params.user === req.session.login.username) {
    return res.status(400).json({ message: 'Não pode deletar a si mesmo!' });
  }

  next();
}

module.exports = {
  isAdm,
  verifyUserToDelete
}