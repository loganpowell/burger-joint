const burgers = require('./burgers/burgers.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(burgers);
};
