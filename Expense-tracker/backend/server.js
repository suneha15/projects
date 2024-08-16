const express = require("express");
const dotenv = require("dotenv"); //environment management
const colors = require("colors");
const morgan = require("morgan"); //http request logging

dotenv.config({path : './config/config.env'});

const app = express();

app.get('/',(req,res) => res.send('Hello'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));



