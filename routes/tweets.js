var express = require('express');
var router = express.Router();
require('../models/connection');
const Tweet = require('../models/tweets');




router.get('/',(req, res,)=> {    // route tweet en get pour récupérer les infos de la base de données sur l'ensemble des tweets.
 Tweet.find()
.then(data => {
res.json({tweet:data})
}
)})


router.post('/', (req, res) => {  //                              / on écrit pas le nom de la route car elle est déja intégrée dans le app.js
const newTweet = new Tweet({                                     // route post pour ajouter des nouveaux tweets en base de donnée.
  tweet:req.body.tweet
})

  newTweet.save().then(()=> {


    Tweet.find().then(data => {

        res.json({alltweets:data});
      });
    });
   
});

router.delete('/:id',(req,res)=>{                            // id en param (dans thunder Client écrire un vrai id pour tester)
             
    Tweet.deleteOne({_id:req.params.id }).then(() => {      // supprimer l'id qui est égal à 'id de la requête . c'est l'id qui correspond au bouton supprimer

        Tweet.find().then(data => {
          res.json({result: true});                           // res.json pour avoir un retour conernant notre requête
        });
       
       });



})

/*router.put('/', (req, res) => { 

    const counter = new Counter({
        tweet:req.body.tweet
      })
        newTweet.save().then(()=> {
      
          Tweet.find().then(data => {
      
              res.json({test:data});
            });
          });
         
     });

ajouter l'id dans la propriete numberlike de tweet*/

    

module.exports = router;
