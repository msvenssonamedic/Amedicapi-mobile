var express = require('express')
var router = express.Router()
var hsavisit_controller = require('../controllers/hsaVisitController')

/* POST create patient. */
router.post('/', hsavisit_controller.hsavisit_create_post)

/* GET all patients.  */
router.get('/', hsavisit_controller.hsavisit_get_all)

/* GET patient by id. */
router.get('/:id', hsavisit_controller.hsavisit_get_by_id)

/* PUT update patient. */
router.put('/:id', hsavisit_controller.hsavisit_update_put)

/* DELETE patient. */
router.delete('/:id', hsavisit_controller.hsavisit_delete)

module.exports = router;
