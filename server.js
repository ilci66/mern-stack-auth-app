const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const passport = require("passport");

const users = require("./routes/api/users");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

require('dotenv').config()

// Passport middleware needs to be initialized 
app.use(passport.initialize());

require("./config/passport")(passport);

// Routes, it's gonna take /api/users before the routes I defined in routes folder
// for example: /api/users/login (or /register)
app.use("/api/users", users);

const port = process.env.PORT || 5000
mongoose.connect(process.env.URI, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
)
  .then(() => app.listen(port, () => console.log(`App is listening on port: ${port}`)))
  .catch((error) => console.log(error))