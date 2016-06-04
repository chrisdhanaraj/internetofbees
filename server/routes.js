const path = require('path');

module.exports = (app) => {

  // api routes
  app.use('/dashboard/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/app.html'));
  });

  app.use('/dashboard', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/app.html'));
  });

  app.use('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
  });
}
