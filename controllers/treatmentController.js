var Treatment = require('../models/Treatment')

// CREATE
exports.treatment_create_post = function(req, res) {

    Treatment.create(req.body).then(result => res.send(result))

}

// READ
exports.treatment_get_all = function(req, res) {

    Treatment.findAll().then(asd => res.send(asd))

}

exports.treatment_get_by_id = function(req, res) {

    Treatment.findAll({ where: {ID: req.params.id} }).then(result => {
        res.status(200).send(result)
      })

}

// UPDATE
exports.treatment_update_put = function(req, res) {
    
}

// DELETE
exports.treatment_delete = function(req, res) {
    
}