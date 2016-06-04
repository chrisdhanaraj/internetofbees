const express = require('express');
const User = require('./user.model');
const generateToken = require('./generateToken');
const password = require('./password');

const router = express.Router();


/**
 * signin
 *
 * find in database, sign in
 */

const signin = (req, res) => {
  User.findOne({
    email: req.body.email,
  }, (err, user) => {
    if (err) {
      throw err;
    }

    if (!user) {
      res.json({
        success: false,
        message: 'Authentication failed. User not found',
      });
    } else if (user) {
      if (!password.checkPassword(req.body.password, user.password)) {
        res.json({
          success: false,
          message: 'Authentication failed. Wrong password',
        });
      } else {
        const token = generateToken(user);

        res.json({
          token,
          user,
        });
      }
    }
  });
 };

const signup = (req, res) => {
  const userObj = Object.assign({}, req.body, {
    password: password.hashPassword(req.body.password),
  });


  User.create(userObj, (err, user) => {
    if (err) {
      throw err;
    }

    const token = generateToken(user);

    return res.status(201).json({
      user,
      token,
    });
  });
};

router.post('/signin', signin);
router.post('/signup', signup);

module.exports = router;
