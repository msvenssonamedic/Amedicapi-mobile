var express = require('express')
var router = express.Router()
var evaluate_controller = require('../controllers/evaluateController')
let middleware = require('../middleware')

/* POST create evaluation. */
router.post('/', evaluate_controller.evaluate_create_post)


/* GET all evaluates.  */
//router.get('/', evaluate_controller.evaluate_get_all)

/* GET evaluate by id. */
//router.get('/:id', evaluate_controller.evaluate_get_by_id)

/* PUT update evaluate. */
//router.put('/:id', evaluate_controller.evaluate_update_put)

/* DELETE evaluate. */
//router.delete('/:id', evaluate_controller.evaluate_delete)

module.exports = router;
