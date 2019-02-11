var express = require('express')
var router = express.Router()
var patient_controller = require('../controllers/patientController')

/* POST create patient. */
router.post('/', patient_controller.patient_create_post)

/* GET all patients.  */
router.get('/', patient_controller.patient_get_all)

/* GET patient by id. */
router.get('/:id', patient_controller.patient_get_by_id)

/* PUT update patient. */
router.put('/:id', patient_controller.patient_update_put)

/* DELETE patient. */
router.delete('/:id', patient_controller.patient_delete)

module.exports = router;
