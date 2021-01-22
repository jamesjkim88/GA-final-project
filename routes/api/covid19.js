const express = require('express');
const router = express.Router();
const covid19Ctrl = require('../../controllers/covid19');
const multer = require('multer');
const upload = multer();
// /*---------- Public Routes ----------*/

router.get('/', covid19Ctrl.getCovid19Data)


/*---------- Protected Routes ----------*/




module.exports = router;