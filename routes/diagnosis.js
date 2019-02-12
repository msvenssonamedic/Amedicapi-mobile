var express = require('express')
var router = express.Router()
var diagnosis_controller = require('../controllers/diagnosisController')

/* POST create caregiver. */
router.post('/', diagnosis_controller.diagnosis_create_post)

/* GET all caregivers.  */
router.get('/', diagnosis_controller.diagnosis_get_all)

/* GET caregiver by id. */
router.get('/:id', diagnosis_controller.diagnosis_get_by_id)

/* PUT update caregiver. */
router.put('/:id', diagnosis_controller.diagnosis_update_put)

/* DELETE caregiver. */
router.delete('/:id', diagnosis_controller.diagnosis_delete)

module.exports = router;
