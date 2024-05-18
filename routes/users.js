const usersRouter = require("express").Router();
const { checkAuth } = require("../middlewares/auth.js");
const { findAllGames } = require("../middlewares/games");
const {
  findAllUsers,
  createUser,
  findUserById,
  updateUser,
  deleteUser,
  checkEmptyNameAndEmail,
  checkEmptyNameAndEmailAndPassword,
  checkIsUserExists,
  hashPassword,
  findAuthorizedUser,
  getUserVotedGames,
} = require("../middlewares/users");
const {
  sendAllUsers,
  sendUserCreated,
  sendUserById,
  sendUserUpdated,
  sendUserDeleted,
  sendMe,
} = require("../controllers/users");

usersRouter.get(
  "/me",
  checkAuth,
  findAuthorizedUser,
  findAllGames,
  getUserVotedGames,
  sendMe
);
usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.post(
  "/users",
  checkAuth,
  checkEmptyNameAndEmailAndPassword,
  findAllUsers,
  checkIsUserExists,
  hashPassword,
  createUser,
  sendUserCreated
);
usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  checkAuth,
  findAllUsers,
  checkIsUserExists,
  updateUser,
  sendUserUpdated
);
usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);

module.exports = usersRouter;
