define([], function chalkService() {
  'use strict';
  
  return (function chalkFactory(e) {
    var drawLine = function drawLine(e) {
      var ctx = e.target.ctx;
      console.log('The Context', ctx);
    };
    
    return {
      drawLine: drawLine
    };
  }());
});
