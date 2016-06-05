const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

// middleware to declare static folder
app.use(express.static(path.resolve(__dirname, '../static')));

// connect to mongodb
mongoose.connect(`mongodb://localhost:27017/bees`);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

const server = app.listen(3000, 'localhost', err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Listening at http://localhost:3000');
  }
});

fetch('localhost:3000/api/user/login')
  .then(data => {
    localStorage.setItem('bees-user', JSON.stringify(data));
    window.location = '/dashboard';
}
  .catch(err => {
      var errorElement = document.getElementById('error');

      errorElement.classList.remove('hidden');
      errorElement.classList.add('visible');

}));
