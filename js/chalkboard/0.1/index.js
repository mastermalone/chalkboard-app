require.config({
  paths: {
    'chalkboard-service': 'js/chalkboard/0.1/chalkboard-service/0.1/index-impl'
  }
});

define(['chalkboard-service'], function chalkboard(chalkboardService) {
  'use strict';
  //Set up DOM stuff for the chalkboard
  return (function chalkboard() {
    var setup = function setup() {
      //TODO Temp test
      chalkboardService.initBoard();
    };
    
    return {
      setup: setup
    };
  }());
});
