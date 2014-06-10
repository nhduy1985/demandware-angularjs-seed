'use strict';

angular.module('demandwareAngularSeedApp')
.controller('MainCtrl', function ($scope,$rootScope) {
    $rootScope.pageTitle = 'Home page';
    //Homepage Slider
    var options = {
        nextButton: false,
        prevButton: false,
        pagination: true,
        animateStartingFrameIn: true,
        autoPlay: true,
        autoPlayDelay: 3000,
        preloader: true
      };
    $scope.mySequence = jQuery('#sequence').sequence(options).data('sequence');

    //Products slider
    $scope.produxtsSlider = jQuery('.products-slider').bxSlider({
        slideWidth: jQuery('.products-slider .shop-item').outerWidth()-20, //Gets slide width
        responsive: true,
        minSlides: 1,
        maxSlides: 4,
        slideMargin: 20,
        auto: true,
        autoHover: true,
        speed: 800,
        pager: true,
        controls: false
      });
  });
