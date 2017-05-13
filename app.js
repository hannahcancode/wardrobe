require('mongodb');
require('ejs');
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const { connection: db } = mongoose;

mongoose.connect('mongodb://localhost/wardrobe');


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to ward database')
});

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

// Set Port
app.set('port', (process.env.PORT || 3000));

// Listen on specified port number
app.listen(app.get('port'), () => {
  console.log(`Server started on port ${app.get('port')}`);
});
