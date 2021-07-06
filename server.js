const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

require('dotenv').config()

// console.log(process.env.URI)

const port = process.env.PORT || 5000
mongoose.connect(process.env.URI, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
)
  .then(() => app.listen(port, () => console.log(`App is listening on port: ${port}`)))
  .catch((error) => console.log(error))