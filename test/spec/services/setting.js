'use strict';

describe('Service: setting', function () {

  // load the service's module
  beforeEach(module('demandwareAngularSeedApp'));

  // instantiate service
  var setting;
  beforeEach(inject(function (_setting_) {
    setting = _setting_;
  }));

  it('should do something', function () {
    expect(!!setting).toBe(true);
  });

});
