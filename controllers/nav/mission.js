const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('mission statement');

    res.render('mission');
});

module.exports = router;