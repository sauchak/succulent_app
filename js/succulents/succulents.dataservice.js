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
            species: 'Sedum Burrito',
            image: "images/sedum_burrito_jpg",
          },
          {
            species: 'Aeonium Arboreum Atropurpureum',
            image: "images/aeonium_arboreum_atropurpureum.jpg",
          },
          {
            species: 'Echeveria Multicaulis',
            image: "images/echeveria_multicaulis.jpg",
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

