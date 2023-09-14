//Dependencies
const express = require("express");
const methodOverride = require('method-override')
const mongoose = require("mongoose")
require("dotenv").config();
const app = express()

//Middleware
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//routes



//Mongo DB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));
const PORT = process.env.PORT;

app.listen(PORT, console.log(`Listening on port ${PORT}`));