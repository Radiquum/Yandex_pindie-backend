const sendAllUsers = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(req.usersArray));
};

// Экспортируем контроллер
module.exports = sendAllUsers;
