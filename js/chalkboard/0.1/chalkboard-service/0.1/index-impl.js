define(function chalkboardService() {
  'use strict';
  
  return (function ChalkboardFactory() {
    var initBoard = function initBoard() {
      console.log('Setting up chalkboard');
    };
    
    return {
      initBoard: initBoard
    };
  }());
});
