const path = require('path');

module.exports = (app) => {
  // api routes
  app.use('/api/apiary', require('./api/apiary'));
  app.use('/api/hive', require('./api/hive'));
  app.use('/api/inspection', require('./api/inspection'));
  app.use('/api/user', require('./api/user'));

  // react routes
  // marketing route

  app.get('*', (req, res, next) => {
    if (req.path !== '/') {
      res.sendFile(path.resolve(__dirname, './views/app.html'));
    }

    next();
  });

  app.use('/', (req, res) => {
    if (req.path === '/') {
      res.sendFile(path.resolve(__dirname, './views/index.html'));
    }
  });
};
