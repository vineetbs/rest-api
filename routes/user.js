const express = require("express");
const router = express.Router();
const {
  handleGetUsers,
  handleGetUserById,
  handleAddUser,
  handleDeleteUser,
} = require("../controllers");

router.route("/").get(handleGetUsers).post(handleAddUser);
router.route("/id").get(handleGetUserById).delete(handleDeleteUser);

module.exports = router;
