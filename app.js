const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const router = require('./router/stockApi.js')

const DB_URL = process.env.DB_URL || "";
const PORT = process.env.PORT || 5001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));;
app.use('/api', router)
app.use("*", (req, res) => res.send({message: "page not found"}))


/*
todo
    1. Create service that fetch the date from the instrument api and convert to objcet || save to database,
    2. complete the apis.
*/

app.listen(PORT, () => {console.log(`app is listening on https://localhost:${PORT}/api`)})