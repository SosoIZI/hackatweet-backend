const mongoose = require('mongoose');

const connectionString = "mongodb+srv://ClusterSoso:wtmNFlLOkcKVEHli@clustersoso.7lda9ao.mongodb.net/hackatweet"

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
