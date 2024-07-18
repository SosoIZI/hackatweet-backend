var express = require('express');
var router = express.Router();
const uid2 = require('uid2');
const bcrypt = require('bcrypt');
require('../models/connection');
const User = require('../models/users');


router.post('/register', (req, res) => {
  if (!req.body.firstname && !req.body.username && !req.body.password) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return;
    }
    
    //if the user has not already been registered
    User.findOne({ firstname:req.body.firstname }).then(data => {
      if (data === null) {  
  const hash = bcrypt.hashSync(req.body.password , 10);
        const newUser = new User({
          firstname: req.body.firstname,
          username:req.body.username,
          password: hash,
          token:uid2(32)
        
      });

      newUser.save().then(() => {
        res.json({ result:true, token: newUser.token});
      });
    } else { // if data != null
      // User already exists in database
      res.json({ result: false, error: 'User already exists' });
    }
  });
});





router.post('/login', (req, res) => {
  if (!req.body.username && !req.body.password) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return;
  }

  User.findOne({ username: req.body.username }).then(data => {
 
    if (bcrypt.compareSync(req.body.password, data.password)
 ) {

      res.json({ result: true, token: data.token });
    } else {
      res.json({ result: false, error: 'User not found' });
    }
  });
});


module.exports = router;
