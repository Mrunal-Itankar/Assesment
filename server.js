const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.use('/loginapi', (req, res) => {
  res.send({
    token: 'test123'
  });
});

