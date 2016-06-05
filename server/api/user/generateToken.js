const jwt = require('jsonwebtoken');

/**
 *
 * generateToken
 *
 * Creates a JSON web token used to authorize api routes
 *
 */

const generateToken = (user) => {
  console.log(user);

  const relevant = {
    _id: user._id.toString(),
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  };

  const token = jwt.sign(relevant, 'thecakeisalie', {
    expiresIn: 60 * 60 * 24 * 30,
  });

  return token;
};

module.exports = generateToken;
