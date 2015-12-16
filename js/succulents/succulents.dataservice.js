(function() {
  'use strict';

  angular
    .module('succulentApp')
    .factory('succulentDataService', succulentDataService)

  function succulentDataService() {
    return {
      succulentsList: [
        {
          name: "Aeonium Arboreum Atropurpureum",
          id: 1,
          imageUrl: "images/aeonium_arboreum.jpg"
        },
        {
          name: "Echeveria Agavoides",
          id: 2,
          imageUrl: "images/echeveria_agavoides.jpg"
        },
        {
          name: "Dudleya Gnoma",
          id: 3,
          imageUrl: "images/dudleya_gnoma.jpg"
        },
        {
          name: "Sedum Morganianum",
          id: 4,
          imageUrl: "images/sedum_morganianum.jpg"
        },
        {
          name: "Aeonium Haworthii",
          id: 5,
          imageUrl: "images/aeonium_haworthii.jpg"
        },
         {
          name: "Kalanchoe Luciae",
          id: 6,
          imageUrl: "images/kalanchoe_luciae.jpg"
        },
        {
          name: "Crassula Perforata",
          id: 7,
          imageUrl: "images/crassula_perforata.jpg"
        },
        {
          name: "Echeveria Affinis",
          id: 8,
          imageUrl: "images/echeveria_affinis.jpg"
        },
        {
          name: "Graptopetalum Pentandrum",
          id: 9,
          imageUrl: "images/graptopetalum_pentandrum.jpg"
        },
      ]
    }
  }





})();
