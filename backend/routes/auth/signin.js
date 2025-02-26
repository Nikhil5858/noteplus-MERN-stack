const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'This is Seriously a Secret Key';

// model or schema to connect
const User = require("../../models/User");

// express validator to validate widget
const { body, validationResult } = require("express-validator");
const user = require('../../models/User');

router.get(
    "/",
    [
      body("email", "Envalid Email").isEmail(),
      body("password", "Password Can not be Blank").exists(),
    ], 
    async (req, res) => {
    
      const errors = validationResult(req);
      // if any error occurs then this express validator runs
      if (!errors.isEmpty()) {
        return res.status(403).json({ errors: errors.array() });
      }
    
      const {email ,password} = req.body;
      
      try {
    
        let user = await User.findOne({email});
        if (!user) {
          return res.status(403).json({error:"Envalid Email"});
        }
    
        let comparePassword = await bcrypt.compare(password,user.password);
        if (!comparePassword) {
          return res.status(403).json({error:"Envalid Password"});
        }
    
        const data = {
          user:{
            id:user.id
          }
        }
        const authToken = jwt.sign(data,JWT_SECRET);
        res.status(200).json({authToken});
        
      } 
      catch (error) {
        res.status(403).send("Internal Servere Error")
      }
    
    })
    
    
module.exports = router;
    