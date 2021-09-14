const express = require("express");
const router = express.Router();
const Conference = require("../models/conference");

router.get("/", async function (req, res) {
  if (req.session.userId) {
    let conferences = req.session.userId
      ? await Conference.findAll({
          order: [["id", "DESC"]],
        })
      : [];
    res.render("admin/conference", { conferences });
  } else {
    res.redirect("auth/login");
  }
});

router.post("/", async function (req, res) {
  try {
    const data = req.body;
    await Conference.create(data);
    res.json({ success: true });
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const conference = await Conference.findByPk(id);
    res.json({ conference: conference });
  } catch (error) {
    console.log(error.message);
  }
});

// update conference
router.put("/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const newData = req.body;
    const conference = await Conference.findByPk(id);
    await conference.update(newData);
    res.json({ success: true });
  } catch (error) {
    console.log(error.message);
  }
});

// delete conference
router.delete("/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const conference = await Conference.findByPk(id);
    await conference.destroy();
    res.json({ success: true });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
