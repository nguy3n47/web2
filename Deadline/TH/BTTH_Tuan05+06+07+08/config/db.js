const { Sequelize, Model, DataTypes } = require("sequelize");
module.exports = new Sequelize(process.env.DATABASE_URL);
