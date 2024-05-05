const users = require('../models/user');

const findAllUsers = async (req, res, next) => {
  req.usersArray = await users.find({});
  next();
}

// Экспортируем функцию поиска всех пользователей
module.exports = findAllUsers;