var express = require('express')
var router = express.Router()
var user_controller = require('../controllers/userController')

/* POST create caregiver. */
router.post('/', user_controller.user_create_post)

/* GET all caregivers.  */
router.get('/', user_controller.user_get_all)

/* GET caregiver by id. */
router.get('/:id', user_controller.user_get_by_id)

/* PUT update caregiver. */
router.put('/:id', user_controller.user_update_put)

/* DELETE caregiver. */
router.delete('/:id', user_controller.user_delete)

module.exports = router;
