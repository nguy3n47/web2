const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Todo = require("../models/todo");
const pool = require("../config/db")

// get all todo
router.get("/", async function (req, res) {
  try {
    const allTodos = await pool.query("SELECT * FROM todos ORDER BY id DESC");
    const todos = allTodos.rows
    res.render("todo/index", { todos });
  } catch (error) {
    console.log(err.message)
  }
});

// post todo
router.post("/", async function (req, res) {
  try {
    const { newtodo } = req.body;

    const text = 'INSERT INTO todos(id, description, completed) VALUES($1, $2, $3) RETURNING *'
    const values = [Date.now(), newtodo, false];

    const todo = await pool.query(text, values)

    res.redirect('/');

  } catch (error) {
    console.log(err.message)
  }
});

// update todo
router.put("/", async function (req, res) {
  try {
    const {id} = req.body;
    const getTodo = await pool.query('SELECT * FROM todos WHERE id = $1', [id]);
    let bool = getTodo.rows[0].completed;
    const putTodo = await pool.query('UPDATE todos SET completed = $1 WHERE id = $2', [!bool, id]);
    res.json({ success: true });
  } catch (error) {
    console.log(err.message)
  }
});

// delete todo
router.delete("/", async function (req, res) {
  try {
    const {id} = req.body;
    console.log(id);
    const deleteTodo = await pool.query('DELETE FROM todos WHERE id = $1', [id]);
    res.json({ success: true });
  } catch (error) {
    console.log(err.message)
  }
});

module.exports = router;
