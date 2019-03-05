
var Visit = require('../models/Visit')

// CREATE
exports.visit_create_post = function(req, res) {

    Visit.create(req.body).then(result => res.send(result))

}

// READ
exports.visit_get_all = function(req, res) {

    Visit.findAll().then(asd => res.send(asd))

}

exports.visit_get_by_id = function(req, res) {

    Visit.findAll({ where: {ID: req.params.id} }).then(result => {
        res.status(200).send(result)
      })

}


exports.visit_get_by_patient_id = function(req, res) {

    Visit.findAll({ where: {patient_id: req.params.id} }).then(result => {
        res.status(200).send(result)
      })

}

// UPDATE
exports.visit_update_put = function(req, res) {
    /*
    Visit.update(
        req.body,
        {returning: true, where: {ID: req.params.id} }
      )
      .then(result => res.send(result))
    */
}

// DELETE
exports.visit_delete = function(req, res) {
    
    Visit.destroy({
        where: {ID: req.params.id}
    })
    .then(result => res.status(200).send(`Visit with id ${req.params.id} deleted.`))
    
}