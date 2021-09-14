const { DataTypes } = require("sequelize");
const db = require("../config/db");
const User = require("./user");
const Conference = require("./conference");

const UserConference = db.define("UserConference", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

User.belongsToMany(Conference, { through: UserConference });
Conference.belongsToMany(User, { through: UserConference });

module.exports = UserConference;
