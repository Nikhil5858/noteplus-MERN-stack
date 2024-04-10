const express = require('express');
const router = express.Router();
const fetchuser = require("../../middleware/fetchuser");
const Note = require("../../models/Notes");


router.get('/',fetchuser,async(req,res)=>{
    const notes = await Note.find({user:req.user.id});
    res.send(notes)
})

module.exports = router