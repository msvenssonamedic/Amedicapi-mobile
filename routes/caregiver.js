var express = require('express')
var router = express.Router()
var caregiver_controller = require('../controllers/caregiverController')
let middleware = require('../middleware')

/* POST create caregiver. */
router.post('/', caregiver_controller.caregiver_create_post)

/* GET all caregivers.  */
router.get('/', caregiver_controller.caregiver_get_all)

/* GET caregiver by id. */
router.get('/:id', caregiver_controller.caregiver_get_by_id)

/* PUT update caregiver. */
router.put('/:id', caregiver_controller.caregiver_update_put)

/* DELETE caregiver. */
router.delete('/:id', caregiver_controller.caregiver_delete)

module.exports = router;
