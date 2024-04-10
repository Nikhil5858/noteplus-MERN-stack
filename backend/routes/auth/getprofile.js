const express = require("express");
const router = express.Router();

// model or schema to connect
const User = require("../../models/User");

// express validator to validate widget
const fetchuser = require("../../middleware/fetchuser");

router.post("/", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    res.status(403).send("Internal Server Error");
  }
});
module.exports = router;
