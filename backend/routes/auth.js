const express = require("express");
const router = express.Router();

// model or schema to connect
const User = require("../models/User");

// express validator to validate widget
const { body, validationResult } = require("express-validator");

router.post(
  "/",
  [
    body("name", "Name must be at least 3 chr").isLength({ min: 3 }),
    body("email", "Envalid Email").isEmail(),
    body("password", "Password must be at least 5 char or number").isLength({ min: 5 }),
  ], 
  async (req, res) => {
    const errors = validationResult(req);

    // if any error occurs then this express validator runs
    if (!errors.isEmpty()) {
      return res.status(403).json({ errors: errors.array() });
    }

    // check if the user already exists
    let existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(403).json({ error: "This Email Was Already Exists." });
    }

    // add data into the database
    let newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    return res.status(200).json({user: newUser });
  }
);

module.exports = router;
