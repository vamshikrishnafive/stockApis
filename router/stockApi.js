const express = require('express')
const router = express.Router();
const fs = require('fs');

router.route('/').get((req, res) => {
    if (fs.existsSync("instruments.json")) {
        fs.readFile("instruments.json", (err, data) => {
            if(data) {
                console.log(data)
            }
        })
    }
});
router.route('/stocks-list').get((req, res) => res.send({ success: true }));
router.route('/quote-list').post((req, res) => res.send({ success: true }));
router.route('/stock-search').post((req, res) => res.send({ success: true })); //search_param=abc

module.exports = router

