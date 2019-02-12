
var Diagnosis = require('../models/Diagnosis')

// CREATE
exports.diagnosis_create_post = function(req, res) {

    Diagnosis.create(req.body).then(result => res.send(result))

}

// READ
exports.diagnosis_get_all = function(req, res) {

    Diagnosis.findAll().then(asd => res.send(asd))

}

exports.diagnosis_get_by_id = function(req, res) {

    Diagnosis.findAll({ where: {ID: req.params.id} }).then(result => {
        res.status(200).send(result)
      })

}

// UPDATE
exports.diagnosis_update_put = function(req, res) {

}

// DELETE
exports.diagnosis_delete = function(req, res) {

}