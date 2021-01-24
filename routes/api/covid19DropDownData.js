const express = require('express');
const router = express.Router();
const covid19Ctrl = require('../../controllers/covid19');
// /*---------- Public Routes ----------*/


router.get('/:country', covid19Ctrl.getCovid19DropDownData)


/*---------- Protected Routes ----------*/




module.exports = router;