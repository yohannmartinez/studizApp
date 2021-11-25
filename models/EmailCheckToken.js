const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const EmailCheckTokenSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = EmailCheckToken = mongoose.model(
  "emailCheckTokens",
  EmailCheckTokenSchema
);
