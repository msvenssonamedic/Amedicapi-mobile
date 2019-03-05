
var User = require('../models/AMEDUser')

// CREATE
exports.user_create_post = function(req, res) {

    User.create(req.body).then(result => res.send(result))

}

// READ
exports.user_get_all = function(req, res) {

    User.findAll().then(asd => res.send(asd))

}

exports.user_get_by_id = function(req, res) {

    User.findAll({ where: {ID: req.params.id} }).then(result => {
        res.status(200).send(result)
      })

}

// UPDATE
exports.user_update_put = function(req, res) {
    /*
    User.update(
        req.body,
        {returning: true, where: {ID: req.params.id} }
      )
      .then(result => res.send(result))
    */
}

// DELETE
exports.user_delete = function(req, res) {
    /*
    User.destroy({
        where: {ID: req.params.id}
    })
    .then(result => res.status(200).send(`User with id ${req.params.id} deleted.`))
    */
}