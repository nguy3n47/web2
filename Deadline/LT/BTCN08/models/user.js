const { DataTypes } = require("sequelize");
const db = require("../config/db");

const User = db.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    //allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

// password: "$2b$10$EDV54Ae2iDARzqG2Qi8cvud6d83.grBxaJNkNrzOqEY0Hy1re2sXC", 123456

User.findByUsername = async function (username) {
  return await User.findOne({
    where: {
      username,
    },
  });
};

User.findByEmail = async function (email) {
  return await User.findOne({
    where: {
      email,
    },
  });
};

User.findById = async function (id) {
  return User.findByPk(id);
};

module.exports = User;
