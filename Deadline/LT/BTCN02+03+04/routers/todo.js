const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Todo = require("../models/todo");

router.get("/", function (req, res) {
  const todos = req.session.todos ? JSON.parse(req.session.todos) : [];
  console.log(todos);
  res.render("BTCN04/index", { todos });
});

router.post("/", function (req, res) {
  const { newtodo } = req.body;

  const todos = req.session.todos ? JSON.parse(req.session.todos) : [];

  const todo = {
    id: Date.now(),
    description: newtodo,
    completed: false,
  };

  todos.push(todo);

  req.session.todos = JSON.stringify(todos);

  res.redirect("/BTCN04");
});

router.put('/', function(req, res){
  console.log(req.body);
})

router.delete('/', function(req, res){
  //const {todoId} = req.body;
})

module.exports = router;
