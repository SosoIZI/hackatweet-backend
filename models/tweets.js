const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
  tweet: String,
  hashtag:[String],
  date: Date,
  nbLike:[{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],     // c'est les users qui ont liké le tweet //
                                                                      // On met un tableau  car plusieurs users qui likent 
  user:{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }        // c'est le user qui a ecrit le tweet

});

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;