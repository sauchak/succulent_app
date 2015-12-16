(function(){
  'use strict';

  angular
    .module('succulentApp', ['ui.router'])
    .config(router);

  router.$inject = ["$stateProvider", "$urlRouterProvider"];

  function router ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: '../templates/about.html'
      })
      .state('succulents', {
        url: '/succulents/{id}',
        templateUrl: '../templates/succulents.html'
      })

    $urlRouterProvider.otherwise('/');

  };

})();
