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

//receive the data sent from front-end
//route: '/receive'
router.post('/', (req, res) =>{
    let nameVal = req.body.Name;
    let dateVal = req.body.Date;
    let topVal = req.body.Top;
    let topBrandVal = req.body.TopBrand;
    let bottomVal = req.body.Bottom;
    let bottomBrandVal = req.body.BottomBrand;
    let shoesVal = req.body.Shoes;
    let shoesBrandVal = req.body.ShoesBrand;
    let imageVal = req.body.Image;

    db.collection("users")
    .add({
        name: nameVal,
        date: dateVal,
        top: topVal,
        topBrand: topBrandVal,
        bottom: bottomVal,
        bottomBrand: bottomBrandVal,
        shoes: shoesVal,
        shoesBrand: shoesBrandVal,
        image: imageVal
    })
    .then(ref => res.send(ref))
    .catch(e => res.send(e))
})

module.exports = router;