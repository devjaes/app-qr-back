const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
const agencyRoute = require('./routes/agencyRoute');


app.use(express.json());
app.use(cors());

app.use('/agency', agencyRoute);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

