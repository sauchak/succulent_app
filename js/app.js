(function() {
  'use strict';

  angular.
    .module('scclntApp', [])
    .controller('MainController', function() {
      var vm = this;
      vm.title = 'This is a Succulent database';
    });

})();
