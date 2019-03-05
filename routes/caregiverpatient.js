var express = require('express')
var router = express.Router()
var caregiverpatient_controller = require('../controllers/caregiverpatientController')
let middleware = require('../middleware')

/* POST create caregiver patient. */
router.post('/', caregiverpatient_controller.caregiverpatient_create_post)

/* GET all caregiver patients.  */
router.get('/', caregiverpatient_controller.caregiverpatient_get_all)

/* GET caregiver patient by id. */
router.get('/:id', caregiverpatient_controller.caregiverpatient_get_by_id)

/* PUT update caregiver patient. */
router.put('/:id', caregiverpatient_controller.caregiverpatient_update_put)

/* DELETE caregiver patient. */
router.delete('/:id', caregiverpatient_controller.caregiverpatient_delete)

module.exports = router;
