const express = require("express");
const router = express.Router();
const fetchuser = require("../../middleware/fetchuser");
const Note = require("../../models/Notes"); 
const { body, validationResult } = require("express-validator");

router.delete("/:id", fetchuser,
  async (req, res) => {
    try {

      let note = await Note.findById(req.params.id);
      if (!note) {
        return res.status(404).send({error:"Notes Not Found!"});
      }

      if (note.user.toString() !== req.user.id) {
        return res.status(401).send({error:"Some Thing Went Wrong!"});
      }

      note = await Note.findByIdAndDelete(req.params.id)
      res.json({success : "Note has Been Deleted"});

    } 

    catch (error) {
      console.error(error.message);
      res.status(500).send({error:"Internal Server Error"}); 
    }
  }
);

module.exports = router;
