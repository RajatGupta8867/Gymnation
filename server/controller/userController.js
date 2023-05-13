const User = require("../model/User");

exports.patchUser = async (req, res) => {
  const { name, occupation, password, location } = req.body;
  const response = await User.findByIdAndUpdate(
    req.user,
    {
      name,
      occupation,
      password,
      location,
    },
    { new: true }
  );
  res.status(200).json({
    status: "success",
    updatedUser: response,
  });
};
