var HSA = require('../models/HSA')

// CREATE
exports.hsa_create_post = function(req, res) {

    HSA.create(req.body).then(result => res.send(result))

}

// READ
exports.hsa_get_all = function(req, res) {

    HSA.findAll().then(asd => res.send(asd))

}

exports.hsa_get_by_id = function(req, res) {

    //HSA.findById(req.params.id).then(result => res.send(result))

    HSA.findOne({ where: {loginID: req.params.id} }).then(result => {
        res.status(200).send(result)
        // project will be the first entry of the Projects table with the title 'aProject' || null
      })

}

// UPDATE
exports.hsa_update_put = function(req, res) {

    HSA.update(
        req.body,
        {returning: true, where: {loginID: req.params.id} }
      )
      .then(result => res.send(result))

}

// DELETE
exports.hsa_delete = function(req, res) {

    HSA.destroy({
        where: {loginID: req.params.id}
    })
    .then(result => res.status(200).send(`HSA with id ${req.params.id} deleted.`))

}