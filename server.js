const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const path = require("path");

const users = require("./routes/users");
const emailCheckTokens = require("./routes/emailCheckTokens");
const lessons = require("./routes/lessons");
const cities = require("./routes/cities");
const lessonLikes = require("./routes/lessonLikes");

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
app.use("/api/users", users);
app.use("/api/emailCheckTokens", emailCheckTokens);
app.use("/api/cities", cities);
app.use("/api/lessons", lessons);
app.use("/api/lessonLikes", lessonLikes);

app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
