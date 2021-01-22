const express = require('express');
const router = express.Router();
const youtubeCtrl = require('../../controllers/youtube');
const multer = require('multer');
const upload = multer();
// /*---------- Public Routes ----------*/

router.get('/', youtubeCtrl.getYoutubeData)


/*---------- Protected Routes ----------*/




module.exports = router;