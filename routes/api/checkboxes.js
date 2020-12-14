const router = require("express").Router();
const checkboxController = require("../../controllers/checkboxController");

// Matches with "/api/"
router.route("/")
  .get(checkboxController.findAll)
  .post(checkboxController).create);

// Matches with "/api/:id"
// router
//   .route("/:id")
//   .get(journalController.findById)
//   .put(journalController.update)
//   .delete(journalController.deleteOne);

module.exports = router;