'use strict';

angular.module('demandwareAngularSeedApp')
  .controller('ProductsCtrl', function ($scope, $rootScope, $routeParams, productService) {
    $scope.id = $routeParams.id;
    productService.get($scope.id).then(function(data) {
        $scope.product = data;
        $rootScope.pageTitle = data.name;
        $scope.addToCartUrl = productService.getAddToCartUrl($scope.id);
        //product thumbnail
        if (data.image_groups) {
          for (var i = 0; i < data.image_groups.length; i++) {
            if (data.image_groups[i].view_type === 'large') {
              $scope.thumbnailImage = data.image_groups[i].images[0];
            }
          }
        }
        else {
          $scope.thumbnailImage = {alt:'Unknown Image', link: 'http://placehold.it/600x360', 'title': 'Unknown Image' };
        }
      });
  });
