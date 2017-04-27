define([], function chalkService() {
  'use strict';
  
  return (function chalkFactory(ctx) {
    var drawLine = function drawLine(ctx) {
      
      console.log('The Context', ctx);
    };
    
    return {
      drawLine: drawLine
    };
  }());
});
