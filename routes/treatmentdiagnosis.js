var express = require('express')
var router = express.Router()
var treatmentdiagnosis_controller = require('../controllers/treatmentdiagnosisController')

/* POST create treatmentdiagnosis. */
router.post('/', treatmentdiagnosis_controller.treatmentdiagnosis_create_post)

/* GET all treatmentdiagnosis.  */
router.get('/', treatmentdiagnosis_controller.treatmentdiagnosis_get_all)

/* GET treatmentdiagnosis by id. */
router.get('/:id', treatmentdiagnosis_controller.treatmentdiagnosis_get_by_diagnosisid)

/* PUT update treatmentdiagnosis. */
router.put('/:id', treatmentdiagnosis_controller.treatmentdiagnosis_update_put)

/* DELETE treatmentdiagnosis. */
router.delete('/:id', treatmentdiagnosis_controller.treatmentdiagnosis_delete)

module.exports = router;
