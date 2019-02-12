var express = require('express')
var router = express.Router()
var treatmentdiagnosis_controller = require('../controllers/treatmentdiagnosisController')

/* POST create caregiver. */
router.post('/', treatmentdiagnosis_controller.treatmentdiagnosis_create_post)

/* GET all caregivers.  */
router.get('/', treatmentdiagnosis_controller.treatmentdiagnosis_get_all)

/* GET caregiver by id. */
router.get('/:id', treatmentdiagnosis_controller.treatmentdiagnosis_get_by_diagnosisid)

/* PUT update caregiver. */
router.put('/:id', treatmentdiagnosis_controller.treatmentdiagnosis_update_put)

/* DELETE caregiver. */
router.delete('/:id', treatmentdiagnosis_controller.treatmentdiagnosis_delete)

module.exports = router;
