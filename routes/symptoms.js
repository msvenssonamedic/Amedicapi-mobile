var express = require('express')
var router = express.Router()
var symptoms_controller = require('../controllers/symptomsController')

/* POST create symptoms sheet. */
router.post('/', symptoms_controller.symptom_create_post)

/* GET all symptoms sheet.  */
router.get('/', symptoms_controller.symptom_get_all)

/* GET symptoms sheet by id. */
router.get('/:id', symptoms_controller.symptom_get_by_id)

/* PUT update symptoms sheet. */
router.put('/:id', symptoms_controller.symptom_update_put)

/* DELETE symptoms sheet. */
router.delete('/:id', symptoms_controller.symptom_delete)

module.exports = router;
