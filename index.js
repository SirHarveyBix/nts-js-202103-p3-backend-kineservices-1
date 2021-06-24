const express = require('express');
require('dotenv').config();
const cors = require('cors');
const documentationRouter = require('./routes/documentation');
const signupRouter = require('./routes/signup');
const signIn = require('./routes/signIn');
const categoryRouter = require('./routes/category');
const formationRouter = require('./routes/formation');

const app = express();
app.use(express.json());

const port = process.env.PORT || 8080;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

app.use('/documentation', documentationRouter);
app.use('/connexion', signIn);
app.use('/signup', signupRouter);
app.use('/category', categoryRouter);
app.use('/formation', formationRouter);

app.listen(port, () => {
  console.log(`Express server listening on ${port}`);
});
