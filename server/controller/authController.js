const User = require("./../model/User");
const jwt = require("jsonwebtoken");

exports.getAllUser = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json({
      status: "success",
      length: allUsers.length,
      users: allUsers,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const currUser = await User.findOne({ email: req.body.email });
    if (!currUser || currUser.password !== req.body.password) {
      return res.status(404).json({
        status: "failed",
        message: "User details incorrect",
      });
    }
    const token = jwt.sign(
      {
        _id: currUser._id,
      },
      process.env.JWT_SECRET
    );
    res.status(200).json({
      status: "success",
      user: currUser,
      token: token,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({ status: "success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
