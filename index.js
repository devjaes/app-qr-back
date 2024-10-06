const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
const agencyRoute = require('./routes/agencyRoute');
const channelRoute = require('./routes/channelRoute');
const clientRoute = require('./routes/clientRoute');
const employeeRoute = require('./routes/employeeRoute');
const followUpRoute = require('./routes/followUpRoute');
const claimUnclaimRoute = require('./routes/claimUnclaimRoute');

app.use(express.json());
app.use(cors());

app.use('/agency', agencyRoute);
app.use('/channel', channelRoute);
app.use('/client', clientRoute);
app.use('/employee', employeeRoute);
app.use('/follow-up', followUpRoute);
app.use('/claim-unclaim', claimUnclaimRoute);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

