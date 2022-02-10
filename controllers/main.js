const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('main route');

    res.render('focus', {
        layout: 'main'
    });
})

module.exports = router;