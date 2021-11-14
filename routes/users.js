const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const Mails = require("../emails/Mails");

// Load models
const User = require("../models/User");
const EmailCheckToken = require("../models/EmailCheckToken");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ message: "EMAIL_ALREADY_EXIST" });
    } else {
      const generated_sponsor_code = new Array(7)
        .join()
        .replace(/(.|$)/g, function () {
          return ((Math.random() * 36) | 0)
            .toString(36)
            [Math.random() < 0.5 ? "toString" : "toUpperCase"]();
        });
      const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        sponsor_code: generated_sponsor_code,
        phone_number: req.body.phone_number,
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              const emailCheckToken = new EmailCheckToken({
                user_id: user._id,
                user_email: user.email,
                token:
                  Math.random().toString(36).substring(2, 15) +
                  Math.random().toString(36).substring(2, 15) +
                  Math.random().toString(36).substring(2, 15),
              });
              emailCheckToken.save().then((token) => {
                Mails.registerEmail(user.email, token.token);
              });
              res.status(200).json(user);
            })
            .catch((err) => {
              console.log(err);
              res.status(400).json({
                message: "REGISTER_PROCESS_ERROR",
              });
            });
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email })
    .then((user) => {
      // Check if user exists
      if (!user) {
        return res
          .status(404)
          .json({ message: "EMAIL_ADDRESS_DONT_EXIST_ERROR" });
      }

      // Check password
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            _id: user._id,
          };

          // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 864000, // 10 days in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token,
                firstname: user.firstname,
              });
            }
          );
        } else {
          return res.status(400).json({ message: "PASSWORD_INCORRECT_ERROR" });
        }
      });
    })
    .catch((err) =>
      res.status(400).json({
        message: "LOGIN_PROCESS_ERROR",
      })
    );
});

// @route GET api/users/getById
// @desc get user profile with id
// @access Public
router.get("/getById", (req, res) => {
  User.find({ _id: req.query._id }, function (err, user) {
    if (user) {
      res.status(200).send({ user: user[0] });
    } else if (!user) {
      res.status(200).send({ user: null });
    }
  });
});

/**
 * @route GET /api/users/getUserByEmail
 * @param {String} email email of the user
 * @return {Boolean}
 */
router.get("/getUserByEmail", (req, res) => {
  User.findOne({ email: req.query.email }, function (err, user) {
    if (user) {
      res.status(200).send({ user });
    } else if (!user) {
      res.status(200).send({ user: null });
    }
  });
});

/**
 * @route POST /api/users/updatePassword
 * @param {String} newPassword new password of user
 * @return {String}
 */
router.post("/updatePassword", (req, res) => {
  const { userId, password } = req.body;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      User.findOneAndUpdate(
        { _id: userId },
        { password: hash },
        { new: true },
        function (err, user) {
          if (user) {
            res.status(200).send({ success: true });
          } else if (!user) {
            res.status(200).send({ success: false });
          }
        }
      );
    });
  });
});

module.exports = router;
