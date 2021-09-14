const users = [
  {
    id: "100021718154984",
    displayName: "Nguyen",
    username: "18600187",
    password: "kocopass",
  },
];

exports.findByUsername = function (username) {
  return users.find((user) => user.username === username);
};

exports.findById = function (id) {
  return users.find((user) => user.id === id);
};
