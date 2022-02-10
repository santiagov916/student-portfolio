const router = require('express').Router();

const mainRoutes = require('./main-routes');

router.use('/main', mainRoutes);

module.exports = router;