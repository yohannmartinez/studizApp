const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const path = require("path");

const cities = require("./routes/cities");
const emailCheckTokens = require("./routes/emailCheckTokens");
const lessonLikes = require("./routes/lessonLikes");
const lessons = require("./routes/lessons");
const s3 = require("./routes/s3");
const users = require("./routes/users");

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log("mongoDB crash"));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/cities", cities);
app.use("/api/emailCheckTokens", emailCheckTokens);
app.use("/api/lessonLikes", lessonLikes);
app.use("/api/lessons", lessons);
app.use("/api/s3", s3);
app.use("/api/users", users);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
