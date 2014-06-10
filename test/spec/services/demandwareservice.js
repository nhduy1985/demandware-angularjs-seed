'use strict';

describe('Service: demandwareService', function () {

  // load the service's module
  beforeEach(module('demandwareAngularSeedApp'));

  // instantiate service
  var demandwareService;
  beforeEach(inject(function (_demandwareService_) {
    demandwareService = _demandwareService_;
  }));

  it('should do something', function () {
    expect(!!demandwareService).toBe(true);
  });

});
