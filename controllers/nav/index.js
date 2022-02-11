const router = require('express').Router();

const about = require('./about.js');
const focus = require('./focus.js');
const mission = require('./mission.js');
const project = require('./projects.js');

router.use('/about', about);
router.use('/focus', focus);
router.use('/mission', mission);
router.use('/projects', project);

module.exports = router;