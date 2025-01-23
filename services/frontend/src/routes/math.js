const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/math', {
        title: 'Math Tools',
        currentPage: 'math'
    });
});

module.exports = router;