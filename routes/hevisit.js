var express = require('express')
var router = express.Router()
var hevisit_controller = require('../controllers/heVisitController')

/* POST create patient. */
router.post('/', hevisit_controller.hevisit_create_post)

/* GET all patients.  */
router.get('/', hevisit_controller.hevisit_get_all)

/* GET patient by id. */
router.get('/:id', hevisit_controller.hevisit_get_by_id)

/* PUT update patient. */
router.put('/:id', hevisit_controller.hevisit_update_put)

/* DELETE patient. */
router.delete('/:id', hevisit_controller.hevisit_delete)

module.exports = router;
