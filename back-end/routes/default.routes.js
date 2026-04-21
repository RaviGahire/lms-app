const express = require('express');
const router = express.Router();

const { checkServerIsWorking } = require('../controllers/default.controller');

router.get('/', checkServerIsWorking);

module.exports = router;