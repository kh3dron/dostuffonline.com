const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/unit_conversion', {
        title: 'Unit Conversion',
        currentPage: 'unit-conversion'
    });
});

module.exports = router;