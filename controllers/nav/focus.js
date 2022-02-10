const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('focus');

    res.render('focus');
});

module.exports = router;