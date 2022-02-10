const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('about page');

    res.render('about');
});

module.exports = router;