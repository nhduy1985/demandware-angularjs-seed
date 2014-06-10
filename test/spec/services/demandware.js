'use strict';

describe('Service: demandware', function () {

  // load the service's module
  beforeEach(module('demandwareAngularSeedApp'));

  // instantiate service
  var demandware;
  beforeEach(inject(function (_demandware_) {
    demandware = _demandware_;
  }));

  it('should do something', function () {
    expect(!!demandware).toBe(true);
  });

});
