const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
  tweet: String,
  hashtag:[String],
  nbLike:Number,
  date:Date

});

const Tweet = mongoose.model('tweets', tweetSchema);


module.exports = Tweet;