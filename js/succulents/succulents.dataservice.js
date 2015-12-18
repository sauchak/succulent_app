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
          special: "self-reliant",
          sign: "fire"
        },
        {
          name: "Echeveria Agavoides",
          id: 2,
          imageUrl: "images/echeveria_agavoides.jpg",
          quirk: "rose-like symmetry",
          alive: "blossom into kindness",
          special: "suspiciously hard-nosed",
          sign: "forest"
        },
        {
          name: "Dudleya Gnoma",
          id: 3,
          imageUrl: "images/dudleya_gnoma.jpg",
          quirk: "height",
          alive: "join the tree people",
          special: "self-sustaining",
          sign: "forest"
        },
        {
          name: "Sedum Morganianum",
          id: 4,
          imageUrl: "images/sedum_morganianum.jpg",
          quirk: "baby-toes and/or burrito-like structure",
          alive: "try and be your friend",
          special: "buoyant",
          sign: "water"
        },
        {
          name: "Aeonium Haworthii",
          id: 5,
          imageUrl: "images/aeonium_haworthii.jpg",
          quirk: "kindness and childlike exuberance",
          alive: "like to become a community organizer",
          special: "assured",
          sign: "fire"
        },
         {
          name: "Kalanchoe Luciae",
          id: 6,
          imageUrl: "images/kalanchoe_luciae.jpg",
          quirk: "arms-to-the-sky whimsy",
          alive: "prove its worth",
          special: "risk-averse",
          sign: "sky"
        },
        {
          name: "Crassula Perforata",
          id: 7,
          imageUrl: "images/crassula_perforata.jpg",
          quirk: "flower-like benevolence",
          alive: "fill the void in your heart",
          special: "optimistic",
          sign: "fire"
        },
        {
          name: "Echeveria Affinis",
          id: 8,
          imageUrl: "images/echeveria_affinis.jpg",
          quirk: "celestial qualities",
          alive: "find peace on the astral plane",
          special: "sanguine",
          sign: "sky"
        },
        {
          name: "Graptopetalum Pentandrum",
          id: 9,
          imageUrl: "images/graptopetalum_pentandrum.jpg",
          quirk: "affinity for grapes and the English folk band Pentangle",
          alive: "sound the trumpet of a new rhythm nation",
          special: "enthusiastic",
          sign: "sky"
        },
        {
          name: "Aloe Arborescens",
          id: 10,
          imageUrl: "images/aloe_arborescens.jpg",
          quirk: "use of the color red as a thematic element",
          alive: "enjoy the outdoors more than it already does",
          special: "dangerously optimistic",
          sign: "forest"
        },
        {
          name: "Faucaria Tigrina",
          id: 11,
          imageUrl: "images/faucaria_tigrina.jpg",
          quirk: "tiger-like jaws",
          alive: "embark on a trek to find the true Fertile Crescent",
          special: "hopeful",
          sign: "water"
        },
        {
          name: "Sedum Nussbaumerianum",
          id: 12,
          imageUrl: "images/sedum_nussbaumerianum.jpg",
          quirk: "growth investments in the financial sector",
          alive: "stay conservative, yet regret nothing",
          special: "fickle",
          sign: "water"
        },
      ]
    }
  }


})();
