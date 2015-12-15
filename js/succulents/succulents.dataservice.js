(function(){
  "use strict";

  angular
    .module("succulentApp")
    .factory("succulentsDataService", succulentsDataService);

  succulentsDataService.$inject = ["$log"];

  function succulentsDataService($log) {

    var defaultList = [
          {
            species: 'Agave Americana',
            image: "images/agave_americana.jpg",
          },
          {
            species: 'Kalanchoe Luciae',
            image: "images/kalanchoe_luciae.jpg",
          },
          {
            species: 'Aeonium Arboreum Atropurpureum',
            image: "images/aeonium_arboreum.jpg",
          },
          {
            species: 'Echeveria Affinis',
            image: "images/echeveria_affinis.jpg",
          }
        ],

        current = [],

        // in order to maintain referential integrity, bind to an
        // object that contains the data as properties, so that we
        // can simply re-assign them, instead of having to
        // mutate them…
        succulentsLists = {
          current: current,
          default: defaultList
        };

  }

})();

