const userModel = require("../../models/userModel");

async function updateProfile(req, res) {
  try {
    if (!req.userId) {
      return res.status(401).json({
        message: "Unauthorized",
        success: false,
        error: true
      });
    }

    const user = await userModel.findById(req.userId).select("-password"); // loại bỏ password

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
        error: true
      });
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.phone = req.body.phone || user.phone;
    user.address = req.body.address || user.address;

    const updatedUser = await user.save();

    res.status(200).json({
      data: updatedUser,
      success: true,
      error: false,
      message: "User details updated successfully"
    });

  } catch (err) {
    res.status(500).json({
      message: err.message || "Server error",
      success: false,
      error: true
    });
  }
}

module.exports = updateProfile;
