const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// middleware to declare static folder
app.use(express.static(path.resolve(__dirname, '../static')));

// connect to mongodb
// mongoose.connect(`mongodb://${config.mongo}/apiary`);

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
