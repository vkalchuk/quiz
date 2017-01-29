const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('listening on 3000')
});

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});
