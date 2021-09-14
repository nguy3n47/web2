const { DataTypes } = require("sequelize");
const db = require("../config/db");

const User = db.define("User", {
  displayName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    //allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    //allowNull: false,
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
  attend: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// const users = [
//   {
//     id: "100021718154984",
//     displayName: "Nguyen",
//     username: "18600187",
//     password: "$2b$10$EDV54Ae2iDARzqG2Qi8cvud6d83.grBxaJNkNrzOqEY0Hy1re2sXC", 123456
//     email: "admin@gmail.com",
//     phone: "0383188752",
//     role: "admin",
//     attend: true,
//     avatar: "profile.jpg"
//   },
// ];

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
