const express = require('express');
const app = express();

let options = {};
app.use(express.static("public", options));

app.get('/',function(req,res) {
    res.sendFile('index.html', {root:__dirname});
  });

app.listen(3000);

