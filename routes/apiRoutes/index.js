const router = require('express').Router();

const Noteroutes = require('../apiRoutes/notes')

router.use(Noteroutes);

module.exports = router;