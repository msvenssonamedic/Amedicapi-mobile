
var SymptomsSheet = require('../models/SymptomsSheet')

// CREATE
exports.symptom_create_post = function(req, res) {

    SymptomsSheet.create(req.body).then(result => res.send(result))

}

// READ
exports.symptom_get_all = function(req, res) {

    SymptomsSheet.findAll().then(asd => res.send(asd))

}

exports.symptom_get_by_id = function(req, res) {

    SymptomsSheet.findOne({ where: {ID: req.params.id} }).then(result => {
        res.status(200).send(result)
        // project will be the first entry of the Projects table with the title 'aProject' || null
      })

}

// UPDATE
exports.symptom_update_put = function(req, res) {

    SymptomsSheet.update(
        req.body,
        {returning: true, where: {ID: req.params.id} }
      )
      .then(result => res.send(result))

}

// DELETE
exports.symptom_delete = function(req, res) {

    SymptomsSheet.destroy({
        where: {ID: req.params.id}
    })
    .then(result => res.status(200).send(`Symptoms Sheet with id ${req.params.id} deleted.`))

}