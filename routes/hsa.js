var express = require('express')
var router = express.Router()
var hsa_controller = require('../controllers/hsaController')

/* POST create patient. */
router.post('/', hsa_controller.hsa_create_post)

/* GET all patients.  */
router.get('/', hsa_controller.hsa_get_all)

/* GET patient by id. */
router.get('/:id', hsa_controller.hsa_get_by_id)

/* PUT update patient. */
router.put('/:id', hsa_controller.hsa_update_put)

/* DELETE patient. */
router.delete('/:id', hsa_controller.hsa_delete)

module.exports = router;
