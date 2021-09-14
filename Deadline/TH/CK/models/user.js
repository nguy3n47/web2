const db = require('../config/db');
const Sequelize = require('sequelize');

const User = db.define('User', {
  fullname: Sequelize.STRING,
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING,
  phone: Sequelize.STRING,
  avatar: Sequelize.STRING,
  active: Sequelize.BOOLEAN,
});

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
