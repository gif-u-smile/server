const router = require('express').Router()
const dbController = require('../controllers/dbController')

router.post('/upload',dbController.create)
router.get('/',dbController.read)

module.exports = router