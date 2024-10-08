const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  pseudo: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  sponsorCode: {
    type: String,
  },
  status: {
    type: Object,
    //TODO: mettre à jour les status
    default: { first_connection: true, emailChecked: false },
  },
  profileImage: {
    type: String,
    required: false,
    default: `https://studiz.s3.eu-west-3.amazonaws.com/profileImages/default/${
      Math.floor(Math.random() * 9) + 1
    }.svg`,
  },
  achievements: {
    type: Object,
    //TODO: mettre à jour les achievements
    default: { create_document: false, share_document: false },
  },
  banned: {
    type: Object,
    required: true,
    default: { isBanned: false, bannedUntil: null },
  },
  premium: {
    type: Object,
    required: true,
    default: { isPremium: false, premiumUntil: null },
  },
  preferences: {
    type: Object,
    required: true,
    default: { language: "fr" },
  },
  lastActivity: {
    type: Date,
    default: new Date(),
    required: true,
  },
  gender: {
    type: String,
    default: null,
    required: false,
  },
});

module.exports = User = mongoose.model("users", UserSchema);
