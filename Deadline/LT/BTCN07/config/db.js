const { Sequelize, Model, DataTypes } = require("sequelize");
module.exports = new Sequelize(
  process.env.DATABASE_URL || "postgres://postgres:@localhost:5432/todo",
  {
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);
