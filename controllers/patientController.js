var Patient = require('../models/Patient')

// CREATE
exports.patient_create_post = function(req, res) {

    Patient.create(req.body).then(result => res.send(result))

}

// READ
exports.patient_get_all = function(req, res) {

    Patient.findAll().then(asd => res.send(asd))

}

exports.patient_get_by_id = function(req, res) {

    //Patient.findById(req.params.id).then(result => res.send(result))

    Patient.findOne({ where: {nationalID: req.params.id} }).then(result => {
        res.status(200).send(result)
        // project will be the first entry of the Projects table with the title 'aProject' || null
      })

}

// UPDATE
exports.patient_update_put = function(req, res) {

    Patient.update(
        req.body,
        {returning: true, where: {ID: req.params.id} }
      )
      .then(result => res.send(result))

}

// DELETE
exports.patient_delete = function(req, res) {

    Patient.destroy({
        where: {ID: req.params.id}
    })
    .then(result => res.status(200).send(`Patient with id ${req.params.id} deleted.`))

}