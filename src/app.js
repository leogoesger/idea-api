const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use((req, res, next) => {
  const allowed_header = ['http://localhost:4000', 'http://localhost:3000'];
  const origin = req.headers.origin;
  if (allowed_header.indexOf(origin) > -1 || origin.includes('localhost')) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, ideaJWT, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
  next();
});
app.disable('etag');

require('./routes')(app);

module.exports = app;
