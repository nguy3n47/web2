const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Conference = db.define("Conference", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  fullDescription: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

Conference.findById = async function (id) {
  return Conference.findByPk(id);
};

module.exports = Conference;
