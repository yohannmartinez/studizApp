const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
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
  phone_number: {
    type: String,
    required: true,
  },
  sponsor_code: {
    type: String,
  },
  status: {
    type: Object,
    //TODO: mettre à jour les status
    default: { first_connection: true },
  },
  profile_image: {
    type: String,
    default: null,
    required: false,
  },
  achievements: {
    type: Object,
    //TODO: mettre à jour les achievements
    default: { create_document: false, share_document: false },
  },
  email_checked: {
    type: Boolean,
    default: false,
    required: true,
  },
  banned: {
    type: Boolean,
    required: true,
    default: false,
  },
  last_activity: {
    type: Date,
    default: new Date(),
    required: true,
  },
  gender:{
    type: String,
    default: null,
    required:false,
  }
});

module.exports = User = mongoose.model("users", UserSchema);
