require.config({
  paths: {
    'chalkboard-service': 'js/chalkboard/0.1/chalkboard-service/0.1/index-impl',
    'chalk': 'js/chalk/0.1/index',
    'controls': 'js/controls/0.1/index'
  }
});

define(['chalkboard-service', 'chalk', 'controls'], function chalkboard(chalkboardService, chalk, controls) {
  'use strict';
  //Set up DOM stuff for the chalkboard
  return (function chalkboard() {
    var mouseDown = null;
    var defaultOptions = {
      chalkboardColor: '#000000',
      chalkColor: '#ffffff',
      easerColor: '#000000',
      chalkboardTop: 0,
      chalkboardLeft: 0,
      chalkboardWidth: 900,
      chalboardHeight: 600
    };
    
    var fireEvents = function fireEvents(e) {
      switch(e.type) {
        case 'mousedown':
        mouseDown = true;
        break;
        case 'mouseup':
        mouseDown = false;
        chalk.service.beginPath(e.target.ctx);
        break;
        case 'mousemove':
        if (mouseDown === true) {
           chalk.service.drawLine({
             ctx: e.target.ctx,
             color: '#ffffff',
             canvasX: e.clientX,
             canvasY: e.canvasY,
             toX: (e.clientX - e.target.offsetLeft),
             toY: (e.clientY - e.target.offsetTop),
           });
        }
        break;
      }
    };
    
    var createChalkBoard = function createChalkBoard(options) {
      var mainContent = document.getElementById('main-content');
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      controls.getContextAndOptions(ctx, defaultOptions);
      console.log('Adding Chalkboard to DOM', options.chalkboardColor);
      
      canvas.setAttribute('width', options.chalkboardWidth);
      canvas.setAttribute('height', options.chalboardHeight);
      
      ctx.fillStyle = options.chalkboardColor;
      ctx.fillRect(options.chalkboardLeft, options.chalkboardTop, options.chalkboardWidth, options.chalboardHeight);
      
      canvas.id = 'chalkboard';
      canvas.ctx = ctx;
      canvas.addEventListener('mousedown', fireEvents, true);
      canvas.addEventListener('mousemove', fireEvents, true);
      canvas.addEventListener('mouseup', fireEvents, true);
      mainContent.appendChild(canvas);
      mainContent.appendChild(controls.build());
    };
    
    var setup = function setup(confg) {
      //Called by the app.init function
      var configOptions = {};
      
      if (typeof config !== 'object') {
        console.log('You did not specify any options.  Using defaultOptions');
        configOptions = defaultOptions;
      }else {
        configOptions = confg;
      }
      
      createChalkBoard(configOptions);
      chalkboardService.initBoard();
    };
    
    return {
      setup: setup
    };
  }());
});
