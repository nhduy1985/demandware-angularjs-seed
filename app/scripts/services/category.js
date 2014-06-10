'use strict';

angular.module('demandwareAngularSeedApp')
.factory('categoryService', ['demandwareClient', function(demandwareClient) {
    // Service logic
    // ...
    //var meaningOfLife = 42;

    // Public API here
    return {
      getAll: function () {
        return demandwareClient.call('GET','categories/root',{'levels':2});
      },
      get: function (id) {
        return demandwareClient.call('GET','categories/'+id,{'levels':0});
      },
      getProducts: function(id,limit,start) {
        limit = limit || 8;
        start = start || 0;
        return demandwareClient.call('GET','product_search/images',{'refine_1=cgid':id,'count':limit,'start':start});
      }
    };
  }]);
