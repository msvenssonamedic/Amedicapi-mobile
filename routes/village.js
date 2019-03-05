var express = require('express')
var router = express.Router()
var village_controller = require('../controllers/villageController')

/* POST create village. */
router.post('/', village_controller.village_create_post)

/* GET all villages.  */
router.get('/', village_controller.village_get_all)

/* GET village by id. */
router.get('/:id', village_controller.village_get_by_id)

/* PUT update village. */
router.put('/:id', village_controller.village_update_put)

/* DELETE village. */
router.delete('/:id', village_controller.village_delete)

module.exports = router;
