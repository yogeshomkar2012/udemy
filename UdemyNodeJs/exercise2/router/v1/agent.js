const express = require('express');
const router = express.Router();
const agentController = require('../../controller/agent')

router.get('/agent', agentController.agent);

module.exports = router;
