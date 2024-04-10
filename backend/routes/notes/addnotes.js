const express = require("express");
const router = express.Router();
const fetchuser = require("../../middleware/fetchuser");
const Note = require("../../models/Notes"); 
const { body, validationResult } = require("express-validator");

router.post("/", fetchuser,

  [
    body("title", "Enter a Valid Title Minimin 3 char").isLength({ min: 3 }),
    body("description", "Enter a Valid description Minimin 3 char").isLength({
      min: 3,
    }),
    body("tag", "Enter a Valid tag"),
  ],

  async (req, res) => {
    try {

      const { title, description, tag } = req.body;

      const errors = validationResult(req);

      // if any error occurs then this express validator runs
      if (!errors.isEmpty()) {
        return res.status(403).json({ errors: errors.array() });
      }

      let existingTitle = await Note.findOne({ title: req.body.title });
      if (existingTitle) {
        return res
          .status(403)
          .json({ error: "This Title Was Already Exists." });
      }

      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });      

      const savedNotes = await note.save();

      res.json(savedNotes);

    } 

    catch (error) {
      res.status(500).send("Internal Server Error"); 
    }
  }
);

module.exports = router;
