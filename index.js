const express = require('express');
require('dotenv').config();
const cors = require('cors');
const documentationRouter = require('./routes/documentation');
const signupRouter = require('./routes/signup');

const app = express();
app.use(express.json());

const port = process.env.PORT || 8080;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

app.use('/documentation', documentationRouter);
app.use('/signup', signupRouter);

app.listen(port, () => {
  console.log(`Express server listening on ${port}`);
});
