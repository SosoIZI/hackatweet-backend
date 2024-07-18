var express = require('express');
var router = express.Router();
require('../models/connection');
const Tweet = require('../models/tweets');










router.get('/',(req, res,)=> {
 Tweet.find()
.then(data => {
res.json({tweet:data})
}
)})


router.post('/', (req, res) => {  //   / on ecrit pas le nom de la route car elle est déja intégrée dans le app.js
const newTweet = new Tweet({
  tweet:req.body.tweet
})

  newTweet.save().then(()=> {


    Tweet.find().then(data => {

        res.json({alltweets:data});
      });
    });
   
});





module.exports = router;
