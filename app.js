const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const router = require('./router/stockApi.js');
const fetchData = require('./middleware/convertSymbol.js');

const DB_URL = process.env.DB_URL || "";
const PORT = process.env.PORT || 5001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));;
app.use(fetchData)
app.use('/api', router)
app.use("*", (req, res) => res.send({ message: "page not found" }));

mongoose.connect(DB_URL)
    .then(() => console.log('DB connected'))
    .then(app.listen(PORT, () => {
        console.log(`app is listening on https://localhost:${PORT}/api`)
    }))
    .catch(err => console.error(err))

// todo
// 1. Create service that fetch the date from the instrument api and convert to objcet || save to database. l7z40Ie5yKyr7SPH
// 2. complete the apis.
// 3. create a docker service for this apis.

