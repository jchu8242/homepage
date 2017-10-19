const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('index', { title: 'Jonathan', message: 'Welcome to Jonathan\'s homepage' })
})

module.exports = router;