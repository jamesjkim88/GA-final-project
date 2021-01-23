const express = require('express');
const router = express.Router();
const youtubeCtrl = require('../../controllers/youtube');
// /*---------- Public Routes ----------*/

router.get('/', youtubeCtrl.getYoutubeData)


/*---------- Protected Routes ----------*/




module.exports = router;