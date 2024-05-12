const categoriesRouter = require("express").Router();

const {
  findAllCategories,
  createCategory,
  findCategoryById,
  updateCategory,
} = require("../middlewares/categories");
const {
  sendAllCategories,
  sendCategoryCreated,
  sendCategoryById,
  sendCategoryUpdated,
} = require("../controllers/categories");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.post(
  "/categories",
  findAllCategories,
  createCategory,
  sendCategoryCreated
);
categoriesRouter.put("/catagories/:id", updateCategory, sendCategoryUpdated);

module.exports = categoriesRouter;
