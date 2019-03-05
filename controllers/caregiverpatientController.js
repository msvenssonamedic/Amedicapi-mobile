
var CareGiver_Patient = require('../models/CareGiver_Patient')

// CREATE
exports.caregiverpatient_create_post = function(req, res) {

    CareGiver_Patient.create(req.body).then(result => res.send(result))

}

// READ
exports.caregiverpatient_get_all = function(req, res) {

    CareGiver_Patient.findAll().then(asd => res.send(asd))

}

exports.caregiverpatient_get_by_id = function(req, res) {

    CareGiver_Patient.findAll({ where: {nationalID: req.params.id} }).then(result => {
        res.status(200).send(result)
      })

}

// UPDATE
exports.caregiverpatient_update_put = function(req, res) {

    CareGiver_Patient.update(
        req.body,
        {returning: true, where: {ID: req.params.id} }
      )
      .then(result => res.send(result))

}

// DELETE
exports.caregiverpatient_delete = function(req, res) {

    CareGiver_Patient.destroy({
        where: {ID: req.params.id}
    })
    .then(result => res.status(200).send(`Caregiver with id ${req.params.id} deleted.`))

}