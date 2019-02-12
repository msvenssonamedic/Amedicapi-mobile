
var HSA_Visit = require('../models/HSA_Visit')

// CREATE
exports.hsavisit_create_post = function(req, res) {

    HSA_Visit.create(req.body).then(result => res.send(result))

}

// READ
exports.hsavisit_get_all = function(req, res) {

    HSA_Visit.findAll().then(asd => res.send(asd))

}

exports.hsavisit_get_by_id = function(req, res) {

    HSA_Visit.findAll({ where: {patientID: req.params.id} }).then(result => {
        res.status(200).send(result)
      })

}

// UPDATE
exports.hsavisit_update_put = function(req, res) {
    /*
    HSA_Visit.update(
        req.body,
        {returning: true, where: {patientID: req.params.id} }
      )
      .then(result => res.send(result))
    */
}

// DELETE
exports.hsavisit_delete = function(req, res) {
    /*
    HSA_Visit.destroy({
        where: {patientID: req.params.id}
    })
    .then(result => res.status(200).send(`HSA_Visit with id ${req.params.id} deleted.`))
    */
}