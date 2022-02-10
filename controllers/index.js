const router = require('express').Router();

const homeRoutes = require('./nav');
const mainPage = require('./main.js');

router.use('/', homeRoutes);
router.use('/main', mainPage)

module.exports = router;