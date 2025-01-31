const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/network-testing', {
        title: 'Networking Tools',
        currentPage: 'network-testing'
    });
});

module.exports = router;