const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`)
});

app.get('/available_payments', (req, res) => {
  const data = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  }
  res.send(data);
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (userName) {
    res.status(200);
    res.send(`Welcome ${userName}`)
  } else {
    res.status(400);
    res.send('not found');
  }
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
