const express = require('express')
const path = require('path');

const app = express()
app.use(express.json())
const port = process.env.PORT || 8080;
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.post('/login', (req, res) => {
  res.send(req.body);
})


app.post('/capitalize', (req, res) => {
  ans = {...req.body};
  ans.name = ans.name.toUpperCase();
  ans.email = ans.email.toUpperCase();

  res.send(ans);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})