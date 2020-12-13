const router = require("express").Router();
const journalController = require("../../controllers/journalController");

// Matches with "/api/"
   router
   .route("/")
   .get(journalController.findAllemo)
   .post(journalController.createEmo);

   router
   .route("/:id")
   
   .delete(journalController.removeEmo);
module.exports = router;

