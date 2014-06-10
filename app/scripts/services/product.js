'use strict';

angular.module('demandwareAngularSeedApp')
.factory('productService', ['demandwareClient', function(demandwareClient) {
    // Service logic
    // ...
    //var meaningOfLife = 42;

    // Public API here
    return {
      get: function (id) {
        return demandwareClient.call('GET','products/'+id,{'expand':'images,prices'});
      },
      getAddToCartUrl: function(id) {
        return demandwareClient.getAddCartLink(id);
      }
    };
  }]);
