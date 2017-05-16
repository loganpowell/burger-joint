// Initializes the `burgers` service on path `/burgers`
const createService = require('feathers-sequelize');
const createModel = require('../../models/burgers.model');
const hooks = require('./burgers.hooks');
const filters = require('./burgers.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'burgers',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/burgers', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('burgers');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
