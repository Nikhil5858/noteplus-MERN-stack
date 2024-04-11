const express = require("express");
const router = express.Router();
const fetchuser = require("../../middleware/fetchuser");
const Note = require("../../models/Notes"); 
const { body, validationResult } = require("express-validator");

router.put("/:id", fetchuser,
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

      const newNotes = {};
      if (title){newNotes.title = title};
      if (description){newNotes.description = description};
      if (tag){newNotes.tag = tag};

      let note = await Note.findById(req.params.id);
      if (!note) {
        return res.status(404).send({error:"Notes Not Found!"});
      }
      if (note.user.toString() !== req.user.id) {
        return res.status(401).send({error:"Some Thing Went Wrong!"});
      }

      note = await Note.findByIdAndUpdate(req.params.id,{$set:newNotes},{new:true})
      res.json({note});

    } 

    catch (error) {
      console.error(error.message);
      res.status(500).send({error:"Internal Server Error"}); 
    }
  }
);

module.exports = router;
