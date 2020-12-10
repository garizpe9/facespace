const db = require("../database/models/user");

// Defining methods for the journalController
module.exports = {
  findAll: function(req, res) {
    db
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
       .catch(err => res.status(422).json(err));
 },
//   findById: function(req, res) {
//     db.Journal
//       .findById(req.params.id)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
  create: function(req, res) {
    db
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
//   update: function(req, res) {
//     db.Journal
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.Journal
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }

Userfind:function(req, res) {
    db
    .findOne(req.username)
    .populate('header, entry, date') // multiple path names in one requires mongoose >= 3.6
    .exec(function(err, usersDocuments) {
        // handle err
        // usersDocuments formatted as desired
    });
}

};
