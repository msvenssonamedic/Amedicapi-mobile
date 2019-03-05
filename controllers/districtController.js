
var District = require('../models/District')

// CREATE
exports.district_create_post = function(req, res) {

    District.create(req.body).then(result => res.send(result))

}

// READ
exports.district_get_all = function(req, res) {

    District.findAll().then(asd => res.send(asd))

}

exports.district_get_by_id = function(req, res) {

    District.findAll({ where: {ID: req.params.id} }).then(result => {
        res.status(200).send(result)
      })

}

// UPDATE
exports.district_update_put = function(req, res) {

}

// DELETE
exports.district_delete = function(req, res) {
    District.destroy({
        where: {ID: req.params.id}
    })
    .then(result => res.status(200).send(`District with id ${req.params.id} deleted.`))
}