'use strict';

angular.module('demandwareAngularSeedApp')
  .factory('demandwareClient', function ($http,CONFIG) {
    var baseUrl = CONFIG.demandware.baseUrl,
        apiVersion = CONFIG.demandware.apiVersion,
        clientId = CONFIG.demandware.clientId;

    return {
      call: function (method,url,params) {
        var callUrl = baseUrl + '/' + apiVersion + '/' + url + '?';
        var urlParams = [];
        for (var key in params) {
          urlParams.push(key + '=' + params[key]);
        }
        urlParams.push('client_id=' + clientId);
        callUrl += urlParams.join('&');

        return $http({
          url: callUrl,
          method: method
        }).then(function(result) {
          //resolve the promise as the data
          return result.data;
        });
      },
      getAddCartLink: function(productId) {
        return CONFIG.demandware.publicSiteUrl + "default/Product-Show?pid=" + productId;
      }
    };
  });
