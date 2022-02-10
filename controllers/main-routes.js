const { report } = require('.');

const router = require('express').Router();

router.get('/about', (req, res) => {
    console.log('about page')
});

router.get('/projects', (req, res) => {
    console.log('project page')
});

router.get('/mission', (req, res) => {
    console.log('mission statement')
});

module.exports = router;