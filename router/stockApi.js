const express = require('express')
const router = express.Router();

router.route('/').get((req, res) => res.send({success: true}));
router.route('/stocks-list').get((req, res) => res.send({success: true}));
router.route('/quote-list').post((req, res) => res.send({success: true}));
router.route('/stock-search').post((req, res) => res.send({success: true})); //search_param=abc

module.exports = router

