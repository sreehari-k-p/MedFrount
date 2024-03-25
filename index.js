// write a express js code 
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/login', (req, res) => {
  res.send({
    success: true,
    message: 'User is now logged in',
    user: {
      id: '12345',
      name: 'John Doe'
    }
  });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
