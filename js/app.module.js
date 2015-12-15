(function(){
  "use strict";

  angular
    .module("succulentApp", ['ui.router'])
    .config(router);

function router ($stateProvider) {
  $stateProvider
    .state('about', {
      url: 'templates/about',
      templateUrl: 'about.html'
    })
    .state('succulents', {
      url: 'templates/succulents',
      templateUrl: 'succulents.html'
    })

};

})();
