require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const favicon = require('serve-favicon');

require('./config/database');

// Require controllers here

const app = express();

// add in when the app is ready to be deployed
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(require('./config/auth')); 
// api routes must be before the "catch all" route
app.use('/api', require('./routes/api/archives'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/covid19', require('./routes/api/covid19'));
app.use('/api/covid19/usa', require('./routes/api/covid19Country'));
app.use('/api/covid19/country', require('./routes/api/covid19DropDownData'));
app.use('/api/covid19/countries', require('./routes/api/covid19Countries'));
app.use('/api/reddit', require('./routes/api/reddit'));
app.use('/api/youtube', require('./routes/api/youtube'));
app.use('/api/articles', require('./routes/api/articles'));
// "catch all" route
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app listening on port ${port}`);
});
