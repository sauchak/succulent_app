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
          imageUrl: "images/aeonium_arboreum.jpg",
          quirk: "purplish sophistication",
          alive: "branch out into pure love",
          special: "self-reliant"
        },
        {
          name: "Echeveria Agavoides",
          id: 2,
          imageUrl: "images/echeveria_agavoides.jpg",
          quirk: "rose-like symmetry",
          alive: "blossom into kindness",
          special: "suspiciously hard-nosed"
        },
        {
          name: "Dudleya Gnoma",
          id: 3,
          imageUrl: "images/dudleya_gnoma.jpg",
          quirk: "height",
          alive: "join the tree people",
          special: "self-sustaining"
        },
        {
          name: "Sedum Morganianum",
          id: 4,
          imageUrl: "images/sedum_morganianum.jpg",
          quirk: "baby-toes and/or burrito-like structure",
          alive: "try and be your friend",
          special: "buoyant"
        },
        {
          name: "Aeonium Haworthii",
          id: 5,
          imageUrl: "images/aeonium_haworthii.jpg",
          quirk: "kindness and childlike exuberance",
          alive: "like to become a community organizer",
          special: "assured"
        },
         {
          name: "Kalanchoe Luciae",
          id: 6,
          imageUrl: "images/kalanchoe_luciae.jpg",
          quirk: "arms-to-the-sky whimsy",
          alive: "prove its worth",
          special: "risk-averse"
        },
        {
          name: "Crassula Perforata",
          id: 7,
          imageUrl: "images/crassula_perforata.jpg",
          quirk: "flower-like benevolence",
          alive: "",
          special: ""
        },
        {
          name: "Echeveria Affinis",
          id: 8,
          imageUrl: "images/echeveria_affinis.jpg",
          quirk: "celestial qualities",
          alive: "find peace on the astral plane",
          special: "sanguine"
        },
        {
          name: "Graptopetalum Pentandrum",
          id: 9,
          imageUrl: "images/graptopetalum_pentandrum.jpg",
          quirk: "affinity for grapes and the English folk band Pentangle",
          alive: "sound the trumpet of a new rhythm nation",
          special: "enthusiastic"
        },
      ]
    }
  }





})();
