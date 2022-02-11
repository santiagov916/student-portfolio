const router = require('express').Router();

console.log('working projects')
router.get('/', (req, res) => {
    console.log('project page');

    res.render('projects', {
        layout: 'main'
    });
});

module.exports = router;