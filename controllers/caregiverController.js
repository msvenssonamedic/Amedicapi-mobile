
var CareGiver = require('../models/CareGiver')

// CREATE
exports.caregiver_create_post = function(req, res) {

    CareGiver.create(req.body).then(result => res.send(result))

}

// READ
exports.caregiver_get_all = function(req, res) {

    CareGiver.findAll().then(asd => res.send(asd))

}

exports.caregiver_get_by_id = function(req, res) {

    CareGiver.findAll({ where: {ID: req.params.id} }).then(result => {
        res.status(200).send(result)
      })

}

// UPDATE
exports.caregiver_update_put = function(req, res) {

    CareGiver.update(
        req.body,
        {returning: true, where: {ID: req.params.id} }
      )
      .then(result => res.send(result))

}

// DELETE
exports.caregiver_delete = function(req, res) {

    CareGiver.destroy({
        where: {ID: req.params.id}
    })
    .then(result => res.status(200).send(`Caregiver with id ${req.params.id} deleted.`))

}