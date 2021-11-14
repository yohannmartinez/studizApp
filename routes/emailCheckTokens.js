const express = require("express");
const router = express.Router();

// Load Notification model
const EmailCheckToken = require("../models/EmailCheckToken");
const User = require("../models/User");

// @route GET api/notifications/getNotificationsNumber
// @desc create new token to confirm mail
// @access Public
router.post('/createNewToken', (req, res) => {
  const emailCheckToken = new EmailCheckToken({
    user_id: req.body.user_id,
    user_email: req.body.user_email,
    token: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
  })
  emailCheckToken.save().then(token => res.status(200).send(token))
})


// @route GET api/notifications/getNotificationsNumber
// @desc check the token when user try to confirm his mail address
// @access Public
router.post('/checkToken', (req, res) => {
  EmailCheckToken.findOneAndUpdate({ token: req.body.token }, { checked: true }, { new: true }, (err, token) => {
    if (err) {
      res.status(200).send({ success: false, message: "Le lien entré est érroné" })
    } else if (token === null) {
      res.status(200).send({ success: false, message: "Le lien entré est érroné" })
    } else if (token !== null) {
      User.findByIdAndUpdate({ _id: token.user_id }, { email_checked: true }, { new: true }, (error, user) => {
        if (err) {
          res.status(200).send({ success: false, message: "Une érreur est survenue, veuillez réessayer plus tard" })
        } else {
          res.status(200).send({ success: true, message: "" })

        }
      })
    }
  })
})


module.exports = router;