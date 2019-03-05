
var Visit = require('../models/Visit')
var AMEDUser = require('../models/AMEDUser')
var SymptomsSheet = require('../models/SymptomsSheet')

class VisitObject {
    constructor() {
        this.patient_id = null
        this.diagnosis_id = null
        this.user_id = null
        this.symptoms_sheet_id = null
        this.timestamp = null
    }
}

// CREATE
exports.evaluate_create_post = function(req, res) {

    let visitObject = new VisitObject()

    // Evaluate symptoms sheet to determine what diagnosis to put.
    if(req.body.symptoms_sheet.fever > 37 ) {
        // Link visit to fever diagnosis.
        visitObject.diagnosis_id = 4
    } else {
        // Link visit to not fever diagnosis.
        visitObject.diagnosis_id = 4
    }

    visitObject.patient_id = req.body.patient_id
    visitObject.timestamp = req.body.timestamp

    // Find logged in user
    AMEDUser.findOne({ where: {login_id: req.body.login_id} }).then(result => {
        result = result.toJSON()
        visitObject.user_id = result.ID

        createVisit()

    })

    function createVisit() {
        if(visitObject.user_id != null && 
            visitObject.diagnosis_id != null &&
            visitObject.patient_id != null ) {
                // Create symptoms sheet
                SymptomsSheet.create(req.body.symptoms_sheet).then(result =>{
                    result = result.toJSON()
        
                    visitObject.symptoms_sheet_id = result.ID

                    // Visit object parameters are set, now create it:
                    Visit.create(visitObject).then(result => res.send(result))
                }).catch(function (err) {
                    console.log(err)
                })
        
                
            } else {
                console.log('visitObject is missing values.')
            }
    }

    

}

// READ
/*
exports.evaluate_get_all = function(req, res) {

    CareGiver.findAll().then(asd => res.send(asd))

}
*/

/*
exports.evaluate_get_by_id = function(req, res) {

    CareGiver.findAll({ where: {ID: req.params.id} }).then(result => {
        res.status(200).send(result)
      })

}
*/

// UPDATE
/*
exports.evaluate_update_put = function(req, res) {

    CareGiver.update(
        req.body,
        {returning: true, where: {ID: req.params.id} }
      )
      .then(result => res.send(result))

}
*/

// DELETE
/*
exports.evaluate_delete = function(req, res) {

    CareGiver.destroy({
        where: {ID: req.params.id}
    })
    .then(result => res.status(200).send(`Caregiver with id ${req.params.id} deleted.`))

}
*/