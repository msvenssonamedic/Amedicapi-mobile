var Diagnosis_Visit = require('../models/Diagnosis_Visit')

// CREATE
exports.diagnosisvisit_create_post = function(req, res) {

    Diagnosis_Visit.create(req.body).then(result => res.send(result))

}

// READ
exports.diagnosisvisit_get_all = function(req, res) {

    Diagnosis_Visit.findAll().then(asd => res.send(asd))

}

exports.diagnosisvisit_get_by_diagnosisid = function(req, res) {

    Diagnosis_Visit.findAll({ where: {visit_id: req.params.id} }).then(result => {
        res.status(200).send(result)
      })

}

// UPDATE
exports.diagnosisvisit_update_put = function(req, res) {
    
}

// DELETE
exports.diagnosisvisit_delete = function(req, res) {
    Diagnosis_Visit.destroy({ 
        where: {visit_id: req.params.id}
    })
    .then(result => res.status(200).send(`DiagnosisVisit with visit_id ${req.params.id} deleted.`))
}