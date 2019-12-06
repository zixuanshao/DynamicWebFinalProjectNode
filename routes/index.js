var express = require('express');
var router = express.Router();


const admin = require('firebase-admin');

let serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dynamic-web-final.firebaseio.com"
});

let db = admin.firestore();

router.get('/', function(req, res){
    var users = [];
    let usersRef = db.collection('users');
    let allUsers = usersRef.get()
    .then(snapshot => {
        snapshot.forEach(doc => {
          // console.log(doc.id, '=>', doc.data());
          //add content
          users.push({
            id: doc.id,
            user_info: doc.data()
          }) 
        });
        //display all the contents in the 'users' array
        res.send(users)
      })
    .catch(err => {
        console.log('Error getting documents', err);
    });

})

//getting a single post based on ID
//Route: /post/:id
router.get('/:id', function(req, res) {
  //get doc id 
  let queryId = req.params.id;
  //create a ref based on id
  let usersRef = db.collection('users').doc(queryId);
  usersRef.get()
    .then(doc => {
      if (!doc.exists) {
        //if id invalid display this message
        res.send('Blog not found')
      } else {
        //display indivisual doc's content
        res.send(doc.data());
      }
    })
    .catch(err => {
      //logging the error
      console.log(err);
      res.send('Error getting blog')
    });
})


module.exports = router;