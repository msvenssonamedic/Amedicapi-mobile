var Treatment_Diagnosis = require('../models/Treatment_Diagnosis')

// CREATE
exports.treatmentdiagnosis_create_post = function(req, res) {

    Treatment_Diagnosis.create(req.body).then(result => res.send(result))

}

// READ
exports.treatmentdiagnosis_get_all = function(req, res) {

    Treatment_Diagnosis.findAll().then(asd => res.send(asd))

}

exports.treatmentdiagnosis_get_by_diagnosisid = function(req, res) {

    Treatment_Diagnosis.findAll({ where: {diagnosis_id: req.params.id} }).then(result => {
        res.status(200).send(result)
      })

}

// UPDATE
exports.treatmentdiagnosis_update_put = function(req, res) {
    
}

// DELETE
exports.treatmentdiagnosis_delete = function(req, res) {
    Treatment_Diagnosis.destroy({
        where: {diagnosis_id: req.params.id}
    })
    .then(result => res.status(200).send(`Treatmentdiagnosis with diagnosis_id ${req.params.id} deleted.`))
}