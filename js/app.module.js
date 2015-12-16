(function(){
  'use strict';

  angular
    .module('succulentApp', ['ui.router'])
    .config(router);

function router ($stateProvider) {
  $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: '../templates/about.html'
    })
    .state('succulents', {
      url: '/succulents',
      templateUrl: '../templates/succulents.html'
    })

};

})();
