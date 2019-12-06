var express = require('express');
var router = express.Router();

//-----------------firebase-----------------//
//adding firebase
const admin = require('firebase-admin');
let serviceAccount = require('../serviceAccountKey.json');

//initialize firebase app
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

//accessing database
let db = admin.firestore();
//-----------------firebase-----------------//

router.get('/', (req, res) => res.send('post received'));

module.exports = router;