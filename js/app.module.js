(function(){
  'use strict';

  angular
    .module('succulentApp', ['ui.router'])
    .config(router);

  router.$inject = ["$stateProvider", "$urlRouterProvider"];

  function router ($stateProvider, $urlRouterProvider, $rootScope) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: '../templates/about.html'
      })
      .state('home', {
        url: '/home',
        templateUrl: '../templates/home.html'
      })
      .state('succulent', {
        url: '/succulent/:id',
        templateUrl: '../templates/succulent.html',
        controller: function($scope, $stateParams, $rootScope) {
          $rootScope.succulentId = $stateParams.id;
        }
      })

    $urlRouterProvider.otherwise('/home');

  };

})();
