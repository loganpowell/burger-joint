const assert = require('assert');
const app = require('../../src/app');

describe('\'burgers\' service', () => {
  it('registered the service', () => {
    const service = app.service('burgers');

    assert.ok(service, 'Registered the service');
  });
});
