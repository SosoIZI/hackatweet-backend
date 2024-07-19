var express = require('express');
var router = express.Router();
require('../models/connection');
const Tweet = require('../models/tweets');
const User = require('../models/users');


router.get('/',(req, res,)=> {    // route tweet en get pour récupérer les infos de la base de données sur l'ensemble des tweets.
 Tweet.find()
.then(data => {
res.json({tweet:data})
}
)})


router.post('/', (req, res) => {  //                              / on écrit pas le nom de la route car elle est déja intégrée dans le app.js
const newTweet = new Tweet({                                     // route post pour ajouter des nouveaux tweets en base de donnée.
  tweet:req.body.tweet,
  hashtag: req.body.hashtag,
  date: req.body.date,
})

  newTweet.save()
  .then(()=> {
    Tweet.find()
    .then(data => {
        res.json({alltweets:data});
      });
    });
});

router.delete('/:id',(req,res)=>{                            // id en param (dans thunder Client écrire un vrai id pour tester)
    Tweet.deleteOne({_id:req.params.id })
    .then(() => {                                               // supprimer l'id qui est égal à 'id de la requête . c'est l'id qui correspond au bouton supprimer
        Tweet.find()
        .then(data => {
          res.json({result: true});                           // res.json pour avoir un retour conernant notre requête
        }); 
       });
})

// route PUT => mise à jour du compteur 

// router.put('/:token/:id', (req, res) => {      
//     User.findOne({token:req.params.token})                       // on trouve le document user en fonction de son token 
// .then(data => {
//   if(data) {
//     try {                                                        // try...catch =>  regroupe des instructions à exécuter
//       Tweet.findOne({ _id: req.params._id }).then(data => {      // on trouve le document tweet en fonction de son id
//         if (data && !nbLike.includes(req.user._id))              // si le tableau de like ne contient pas le 
//         // console.log(re.user._id)
//           {
//           Post.findOneAndUpdate(
//             { nbLike: ObjectId(req.params.id) },
//             { $push: { nbLike: req.user._id.length } },
//             { "new": true, "upsert": true}
//           );
//         }
//         else {
          
//         }

//       });

//     } catch(err) {
//   console.log('Error => ', err)
//     }
//   }
//   }
// );
// })

module.exports = router;