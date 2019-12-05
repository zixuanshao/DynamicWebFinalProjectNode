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


module.exports = router;