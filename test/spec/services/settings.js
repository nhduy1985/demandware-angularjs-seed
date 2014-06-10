'use strict';

describe('Service: settings', function () {

  // load the service's module
  beforeEach(module('demandwareAngularSeedApp'));

  // instantiate service
  var settings;
  beforeEach(inject(function (_settings_) {
    settings = _settings_;
  }));

  it('should do something', function () {
    expect(!!settings).toBe(true);
  });

});
