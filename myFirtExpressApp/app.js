const express = require('express');
const app = express();

// use http://localhost:3000/images/nodejs.jpg to trigger
// http://localhost:3000/users/123456/books/100

app.use(express.static('public'));
app.get('/users/:userId/books/:bookId',  (req, res) => {
    res.send(req.params)
  });


app.get('/' , (req,res) => res.send('Hello world'));

app.listen(3000,() => console.log('Example app listening on port 3000'));
