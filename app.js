const express = require('express');
const app = express ();
const port = process.env.PORT || 4000;

const indexRoute = require('./routes/index.js')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.get('/', indexRoute)

// serve static images
// app.use('/static', express.static('public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))