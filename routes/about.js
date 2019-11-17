var express = require('express');
var router = express.Router();

router.get('/', (req, res) => res.send('About the API'));
router.get('/me', (req, res) => res.send('About Me'));

module.exports = router;