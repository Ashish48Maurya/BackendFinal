require('dotenv').config()
const express = require('express');
const app = express();
const port = 8000;
const routes = require('./routes/routers');
const mongoConnect = require('./db');
const { generateUsername } = require("unique-username-generator");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

app.get('/username', (req, res) => {
  const username = generateUsername();
  return res.status(200).json({ username });
})

app.get('/history', async (req, res) => {
  try {
    const req = await fetch('https://apilist.tronscanapi.com/api/transaction/?sort=-timestamp&count=true&limit=200&start=0&address=TQ8jPeZcnuXqd9RbiHcgBUDcGW1x9sBSyV');
    const ans = await req.json();
    console.log(ans)
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});



mongoConnect(process.env.MONGO_URL).then(() => {

  app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
}).catch((err) => {
  console.error(err);
  process.exit(1);
});