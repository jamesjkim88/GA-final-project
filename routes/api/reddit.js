const express = require('express');
const router = express.Router();
const redditCtrl = require('../../controllers/reddit');
const multer = require('multer');
const upload = multer();
// /*---------- Public Routes ----------*/

router.get('/', redditCtrl.getRedditData)


/*---------- Protected Routes ----------*/




module.exports = router;