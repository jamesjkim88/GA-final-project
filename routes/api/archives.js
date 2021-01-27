const express = require('express');
const router = express.Router();
const archivesCtrl = require('../../controllers/archives')

router.post('/reddit/archived', archivesCtrl.create)
router.delete('/reddit/archived/:id', archivesCtrl.deleteArchive)

module.exports = router;