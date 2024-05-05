const sendAllCategories = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(req.categoriesArray));
};

// Экспортируем контроллер
module.exports = sendAllCategories;
