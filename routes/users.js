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
  const { pseudo, email, firstname, lastname, password, phoneNumber } =
    req.body.user;
  User.findOne({ $or: [{ email: email }, { pseudo: pseudo }] }).then((user) => {
    if (user && user.email === email) {
      return res
        .status(200)
        .json({ success: false, message: "EMAIL_ALREADY_EXIST" });
    } else if (user && user.pseudo === pseudo) {
      return res
        .status(200)
        .json({ success: false, message: "PSEUDO_ALREADY_EXIST" });
    } else {
      const generated_sponsorCode = new Array(7)
        .join()
        .replace(/(.|$)/g, function () {
          return ((Math.random() * 36) | 0)
            .toString(36)
            [Math.random() < 0.5 ? "toString" : "toUpperCase"]();
        });
      const newUser = new User({
        pseudo,
        firstname,
        lastname,
        email,
        password,
        phoneNumber,
        sponsorCode: generated_sponsorCode,
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
                userId: user._id,
                userEmail: user.email,
                token:
                  Math.random().toString(36).substring(2, 15) +
                  Math.random().toString(36).substring(2, 15) +
                  Math.random().toString(36).substring(2, 15),
              });
              emailCheckToken.save().then((token) => {
                Mails.registerEmail(user.email, token.token);
              });
              res.status(200).json({ success: true, message: "", user });
            })
            .catch((err) => {
              console.log(err);
              res.status(200).json({
                success: false,
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
            userLanguage: user.preferences.language,
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
  User.findOne({ _id: req.query._id }, function (err, user) {
    if (user) {
      res.status(200).send({ user });
    } else if (!user) {
      res.status(200).send({ user: null });
    }
  });
});

// @route GET api/users/getUserLanguage
// @desc get user language with user Id
// @access Public
router.get("/getUserLanguage", (req, res) => {
  User.findOne(
    { _id: req.query.userId },
    "preferences.language",
    function (err, user) {
      if (user) {
        res
          .status(200)
          .send({ success: true, language: user.preferences.language });
      } else if (!user) {
        res.status(200).send({ success: false, language: "fr" });
      }
    }
  );
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
 * @param {String} userId id of the user to update
 * @param {String} oldPassword (optional) old password of the user to check if valid
 * @param {String} newPassword new password of user
 */
router.post("/updatePassword", (req, res) => {
  const { userId, oldPassword, newPassword } = req.body;

  const updatePassword = () => {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newPassword, salt, (err, hash) => {
        User.findOneAndUpdate(
          { _id: userId },
          { password: hash },
          { new: true },
          function (err, user) {
            if (user) {
              res.status(200).send({ success: true, message: null });
            } else if (!user) {
              res.status(200).send({
                success: false,
                message: "CHANGE_PASSWORD_PROCESS_ERROR",
              });
            }
          }
        );
      });
    });
  };

  if (oldPassword) {
    User.findOne({ _id: userId }).then((user) => {
      if (!user) {
        res
          .status(200)
          .send({ success: false, message: "USER_DONT_EXIST_ERROR" });
      }
      bcrypt.compare(oldPassword, user.password).then((isMatch) => {
        if (!isMatch) {
          res
            .status(200)
            .send({ success: false, message: "PASSWORD_INCORRECT_ERROR" });
        } else {
          updatePassword();
        }
      });
    });
  } else {
    updatePassword();
  }
});

module.exports = router;
