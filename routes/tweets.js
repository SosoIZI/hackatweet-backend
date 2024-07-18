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


module.exports = router;
