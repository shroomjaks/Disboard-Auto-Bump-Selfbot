const express = require('express')
const port = 3000;
const path = require('path')

const app = express()
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
})

app.listen(port)