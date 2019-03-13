var express = require('express')
var router = express.Router()
var diagnosisvisit_controller = require('../controllers/diagnosisvisitController')

/* POST create diagnosisvisit. */
router.post('/', diagnosisvisit_controller.diagnosisvisit_create_post)

/* GET all diagnosisvisit.  */
router.get('/', diagnosisvisit_controller.diagnosisvisit_get_all)

/* GET diagnosisvisit by id. */
router.get('/:id', diagnosisvisit_controller.diagnosisvisit_get_by_diagnosisid)

/* PUT update diagnosisvisit. */
router.put('/:id', diagnosisvisit_controller.diagnosisvisit_update_put)

/* DELETE diagnosis. */
router.delete('/:id', diagnosisvisit_controller.diagnosisvisit_delete)

module.exports = router;
