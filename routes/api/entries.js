const router = require("express").Router();
const journalController = require("../../controllers/journalController");

// Matches with "/api/"
router.route("/")
  .get(journalController.findAll)
  .post(journalController.create);
  

// Matches with "/api/:id"
 router
   .route("/:id")
   .get(journalController.findById)
   .delete(journalController.remove);


module.exports = router;

