(function(){
  'use strict';

  angular
    .module('succulentApp')
    .controller('SucculentsController', SucculentsController);

  SucculentsController.$inject = ["succulentDataService", "$rootScope", "$filter"];

  function SucculentsController(succulentDataService, $rootScope, $filter){
    var vm = this;

    vm.activeSucculent = {}

    vm.succulentsList = succulentDataService.succulentsList

    vm.search = '';

    $rootScope.$watch("succulentId", function (succulentId) {
      var matchingSucculent = $filter('filter')(vm.succulentsList, {id: parseInt(succulentId)}, true)
      vm.activeSucculent = matchingSucculent[0]
    })

  };

})();
