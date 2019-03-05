var express = require('express')
var router = express.Router()
var district_controller = require('../controllers/districtController')
let middleware = require('../middleware')

/* POST create district. */
router.post('/', district_controller.district_create_post)

/* GET all districts.  */
router.get('/', district_controller.district_get_all)

/* GET district by id. */
router.get('/:id', district_controller.district_get_by_id)

/* PUT update district. */
router.put('/:id', district_controller.district_update_put)

/* DELETE district. */
router.delete('/:id', district_controller.district_delete)

module.exports = router;
