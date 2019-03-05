
var Village = require('../models/Village')

// CREATE
exports.village_create_post = function(req, res) {

    Village.create(req.body).then(result => res.send(result))

}

// READ
exports.village_get_all = function(req, res) {

    Village.findAll().then(asd => res.send(asd))

}

exports.village_get_by_id = function(req, res) {

    Village.findAll({ where: {ID: req.params.id} }).then(result => {
        res.status(200).send(result)
      })

}

// UPDATE
exports.village_update_put = function(req, res) {

}

// DELETE
exports.village_delete = function(req, res) {
    Village.destroy({
        where: {ID: req.params.id}
    })
    .then(result => res.status(200).send(`Village with id ${req.params.id} deleted.`))
}