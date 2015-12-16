(function(){
  'use strict';

  angular
    .module('succulentApp')
    .controller('SucculentsController', SucculentsController);

  SucculentsController.$inject = ["succulentDataService", "$rootScope"];

  function SucculentsController(succulentDataService, $rootScope){
    var vm = this;

    vm.succulentsList = succulentDataService.succulentsList

    $rootScope.$watch("succulentId", function (succulentId) {
      console.log(succulentId)
    })

  };

})();
