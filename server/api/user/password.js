const bcrypt = require('bcrypt');

const SALTROUNDS = 10;

const hashPassword = (password) => {
  return bcrypt.hashSync(password, SALTROUNDS);
};

const checkPassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

exports.hashPassword = hashPassword;
exports.checkPassword = checkPassword;
