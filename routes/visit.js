var express = require('express')
var router = express.Router()
var visit_controller = require('../controllers/visitController')

/* POST create visit. */
router.post('/', visit_controller.visit_create_post)

/* GET all visits.  */
router.get('/', visit_controller.visit_get_all)

/* GET visit by id. */
router.get('/:id', visit_controller.visit_get_by_id)

/* GET visits by patient id */
router.get('/patient/:id', visit_controller.visit_get_by_patient_id)

/* PUT update visit. */
router.put('/:id', visit_controller.visit_update_put)

/* DELETE visit. */
router.delete('/:id', visit_controller.visit_delete)

module.exports = router;
