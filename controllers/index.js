const user = require("../models/user");

async function handleGetUsers(req, res) {
  const dbUsers = await user.find();
  res.json(dbUsers);
}

async function handleGetUserById(req, res) {
  const users = await user.findById(req.params.id);
  return res.json(users);
  if (!users) {
    return res.status(404).json({
      msg: "invalid id",
    });
  }
}

async function handleAddUser(req, res) {
  const body = req.body;
  if (
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    res.status(400).json({
      msg: "All required",
    });
  } else {
    try {
      const result = await user.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
      });
      console.log(result);
      res.status(200).json({ msg: "success" });
    } catch (error) {
      console.log("the error is " + error);
    }
  }
}

async function handleDeleteUser(req, res) {
  await user.findByIdAndDelete(req.params.id);
  res.json("deleted");
}

module.exports = {
  handleGetUsers,
  handleGetUserById,
  handleAddUser,
  handleDeleteUser,
};
