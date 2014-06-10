'use strict';

angular.module('demandwareAngularSeedApp')
.controller('CategoriesCtrl', function ($scope, $rootScope, $routeParams, categoryService) {
    $scope.id = $routeParams.id;
    $scope.pageCurrent = 0;
    $scope.pageLimit = 16;
    $scope.pageTotals = 1;
    categoryService.get($scope.id).then(function(data) {
        $scope.category = data;
        $rootScope.pageTitle = data.name;
        $scope.isSubCategory = function(category) {
            return category.parent_category_id && category.parent_category_id !== 'root';
          };
      });
    categoryService.getProducts($scope.id,$scope.pageLimit).then(function(data) {
        $scope.products = data.hits;
        $scope.pageTotals = Math.ceil(data.total / $scope.pageLimit);
        $scope.getPagingTotal = function() {
            var result = [];
            for (var i = 0; i < $scope.pageTotals; i++) {
              result.push(i+1);
            }
            return result;
          };
        $scope.onPage = function(page) {
            var next = page*$scope.pageLimit;
            categoryService.getProducts($scope.id,$scope.pageLimit,next).then(function(data) {
              $scope.products = data.hits;
              $scope.pageCurrent = page;
            });
        }
      });
  });
