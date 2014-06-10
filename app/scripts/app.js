'use strict';

angular
.module('demandwareAngularSeedApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'MainCtrl'
  })
  .when('/categories/:id', {
    templateUrl: 'views/category.html',
    controller: 'CategoriesCtrl'
  })
  .when('/oopps', {
    templateUrl: 'views/404.html'
  })
  .when('/products/:id', {
    templateUrl: 'views/products/detail.html',
    controller: 'ProductsCtrl'
  })
  .otherwise({
    redirectTo: '/oopps'
  });
})
.config(function ($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
