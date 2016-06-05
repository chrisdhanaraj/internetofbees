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
    if (req.path !== '/' || req.path !== '/register' || req.path !== '/login') {
      res.sendFile(path.resolve(__dirname, './views/app.html'));
    }

    next();
  });

  // marketing route

  app.use('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/registration.html'));
  });

  app.use('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
  });

  app.use('/', (req, res) => {
    if (req.path === '/') {
      res.sendFile(path.resolve(__dirname, './views/index.html'));
    }
  });
};
