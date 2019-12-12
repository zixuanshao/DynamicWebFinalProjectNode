const express = require('express');
const app = express ();
const port = process.env.PORT || 4000;

const indexRoute = require('./routes/index.js')
const postRoute = require('./routes/post.js')
const deleteRoute = require('./routes/delete.js')

app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://dynamic-web-final.netlify.com");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.use('/', indexRoute)
app.use('/receive', postRoute)
app.use('/delete', deleteRoute)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))