const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

// get all todo
router.get("/", async function (req, res) {
  try {
    const todos = req.session.userId
      ? await Todo.findAll({
          where: {
            userId: req.session.userId,
          },
          order: [["id", "DESC"]],
        })
      : [];
    res.render("todo/index", { todos });
  } catch (error) {
    console.log(error.message);
  }
});

// post todo
router.post("/", async function (req, res) {
  try {
    const { description } = req.body;
    await Todo.create({
      userId: req.session.userId,
      description: description,
      completed: false,
    });
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
  }
});

// update todo
router.put("/", async function (req, res) {
  try {
    const { id } = req.body;
    const todo = await Todo.findByPk(id);
    let bool = todo.completed;
    todo.completed = !bool;
    await todo.save();
    res.json({ success: true });
  } catch (error) {
    console.log(error.message);
  }
});

// delete todo
router.delete("/", async function (req, res) {
  try {
    const { id } = req.body;
    const todo = await Todo.findByPk(id);
    todo.destroy();
    res.json({ success: true });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
