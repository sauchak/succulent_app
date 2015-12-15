(function(){
  "use strict";

  angular
    .module("succulentApp")
    .controller("MainController", MainController);

  MainController.$inject = ["succulentsDataService"];

  function MainController(succulentsDataService){
    var vm = this;

    vm.data = succulentsDataService;
  };

})();
