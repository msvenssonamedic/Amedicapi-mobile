var express = require('express')
var router = express.Router()
var treatment_controller = require('../controllers/treatmentController')

/* POST create caregiver. */
router.post('/', treatment_controller.treatment_create_post)

/* GET all caregivers.  */
router.get('/', treatment_controller.treatment_get_all)

/* GET caregiver by id. */
router.get('/:id', treatment_controller.treatment_get_by_id)

/* PUT update caregiver. */
router.put('/:id', treatment_controller.treatment_update_put)

/* DELETE caregiver. */
router.delete('/:id', treatment_controller.treatment_delete)

module.exports = router;
