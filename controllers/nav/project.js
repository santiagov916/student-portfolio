const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('project page');

    res.render('projects');
});

module.exports = router;