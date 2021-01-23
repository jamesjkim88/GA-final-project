const express = require('express');
const router = express.Router();
const articlesCtrl = require('../../controllers/articles');
// /*---------- Public Routes ----------*/

router.get('/', articlesCtrl.getArticleData)


/*---------- Protected Routes ----------*/




module.exports = router;