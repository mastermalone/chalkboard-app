define([], function chalkService() {
  'use strict';
  
  return (function chalkFactory(config) {
    
    
    var drawLine = function drawLine(config) {
      
      console.log('drawing');
      config.ctx.moveTo(config.canvasX, config.canvasY);//position on canvas x and y
      config.ctx.lineTo(config.toX, config.toY);//Use the mose position -1
      config.ctx.strokeStyle = config.color;
      config.ctx.lineWidth = 5;
      //config.ctx.closePath(); //Makes awesome patterns!
      config.ctx.stroke();
    };
    
    var beginPath = function beginPath(ctx) {
      ctx.beginPath();
    };
    
    return {
      drawLine: drawLine,
      beginPath: beginPath
    };
  }());
});
