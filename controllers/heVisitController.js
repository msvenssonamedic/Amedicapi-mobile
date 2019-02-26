
var HE_Visit = require('../models/HE_Visit')

// CREATE
exports.hevisit_create_post = function(req, res) {

    HE_Visit.create(req.body).then(result => res.send(result))

}

// READ
exports.hevisit_get_all = function(req, res) {

    HE_Visit.findAll().then(asd => res.send(asd))

}

exports.hevisit_get_by_id = function(req, res) {

    HE_Visit.findAll({ where: {patientID: req.params.id} }).then(result => {
        res.status(200).send(result)
      })

}

// UPDATE
exports.hevisit_update_put = function(req, res) {
    /*
    HSA_Visit.update(
        req.body,
        {returning: true, where: {patientID: req.params.id} }
      )
      .then(result => res.send(result))
    */
}

// DELETE
exports.hevisit_delete = function(req, res) {
    /*
    HSA_Visit.destroy({
        where: {patientID: req.params.id}
    })
    .then(result => res.status(200).send(`HSA_Visit with id ${req.params.id} deleted.`))
    */
}