const path = require('path');

module.exports = (app) => {

  // api routes
  app.use('/api/apiary', require('./api/apiary'));
  app.use('/api/hive', require('./api/hive'));
  app.use('/api/inspection', require('./api/inspection'));
  app.use('/api/user', require('./api/user'));

  // react routes
  app.use('/dashboard/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/app.html'));
  });

  app.use('/dashboard', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/app.html'));
  });


  // marketing route
  app.use('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
  });
}
