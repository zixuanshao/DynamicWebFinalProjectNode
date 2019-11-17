var express = require('express');
var router = express.Router();

router.get('/', (req, res) => res.send('About the API'));

module.exports = router;