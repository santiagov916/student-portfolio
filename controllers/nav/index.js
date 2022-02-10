const router = require('express').Router();

const about = require('./about.js');
const focus = require('./focus.js');
const mission = require('./mission.js');
const project = require('./project.js');

router.use('/about', about);
router.use('/focus', focus);
router.use('/mission', mission);
router.use('/project', project);

module.exports = router;