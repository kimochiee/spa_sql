const express = require('express')
const router = express.Router()

const scoreController = require('../controllers/score.controller.js')

router.route('/').get(scoreController.getAll).post(scoreController.create)
router
  .route('/:id')
  .patch(scoreController.update)
  .delete(scoreController.delete)
router.get('/specific/:mmh/:msv', scoreController.findOne)

module.exports = router
