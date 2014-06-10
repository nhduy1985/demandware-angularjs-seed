'use strict';

angular.module('demandwareAngularSeedApp')
  .controller('MenuCtrl', function ($scope, $location, categoryService) {
    $scope.isActived = function(page) {
        return page === $location.path();
      };
    categoryService.getAll().then(function(data) {
        $scope.categories = data.categories;
      });
  });
