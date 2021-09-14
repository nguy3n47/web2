const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Todo = db.define("Todo", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Todo;
