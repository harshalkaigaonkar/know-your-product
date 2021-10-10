const express = require('express');
const { auth } = require('../youtubeData/auth');
const router = express.Router();

router.post('/auth', auth);


module.exports = router;