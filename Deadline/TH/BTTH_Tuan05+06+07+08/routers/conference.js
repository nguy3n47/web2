const express = require("express");
const router = express.Router();
const verifyAdmin = require("../middlewares/verifyAdmin");
const ConferenceController = require("../controllers/conference.controller");

router.use(verifyAdmin);

// getAll
router.get("/", ConferenceController.getAll);

// create
router.post("/", ConferenceController.create);

// getOne
router.get("/:id", ConferenceController.getOne);

// update
router.put("/:id", ConferenceController.update);

// delete
router.delete("/:id", ConferenceController.delete);

module.exports = router;
