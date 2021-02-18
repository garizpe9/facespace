const db = require("../database/models");

// Defining methods for the journalController
module.exports = {
  findUser: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
       .catch(err => res.status(422).json(err));
 },
 
  findAll: function(req, res) {
    db.Journal
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
       .catch(err => res.status(422).json(err));
 },

  findAllemo: function(req, res) {
    db.EmotionJournal
    .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
       .catch(err => res.status(422).json(err));
 },
  findById: function(req, res) {
    db.Journal
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findByIdEmo: function(req, res) {
    db.EmotionJournal
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    db.Journal
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  createEmo: function(req, res) {
    db.EmotionJournal
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {
    db.Journal
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeEmo: function(req, res) {
    db.EmotionJournal
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
Userfind:function(req, res) {
    db.User
    .findOne(req.username)
    .populate('header, entry, date') // multiple path names in one requires mongoose >= 3.6
    .exec(function(err, usersDocuments) {
        // handle err
        // usersDocuments formatted as desired
    });
}

};
