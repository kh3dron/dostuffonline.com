const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/index', {
        title: 'Home',
        currentPage: 'home'
    });
});

module.exports = router;
