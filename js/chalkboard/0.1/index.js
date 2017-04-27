require.config({
  paths: {
    'chalkboard-service': 'js/chalkboard/0.1/chalkboard-service/0.1/index-impl',
    'chalk': 'js/chalk/0.1/index',
    //'template': './js/chalkboard/0.1/view.html ',
    //'css': 'js/chalkboard/0.1/view.css ',
  }
});

define(['chalkboard-service', 'chalk'], function chalkboard(chalkboardService, chalk) {
  'use strict';
  //Set up DOM stuff for the chalkboard
  return (function chalkboard() {
    var mouseDown = null;
    
    var onMouseDown = function onMouseDown(evt, bool) {
     console.log('Event', evt.type, bool);
    };
    var onMouseUp = function onMouseUp(evt, bool) {
      console.log('Event', evt.type, bool);
    };
    
    var fireEvents = function fireEvents(e) {
      switch(e.type) {
        case 'mousedown':
        mouseDown = true;
        onMouseDown(e, mouseDown);
        break;
        case 'mouseup':
        mouseDown = false;
        onMouseUp(e, mouseDown);
        break;
        case 'mousemove':
        if (mouseDown === true) {
           chalk.service.drawLine(e.target.ctx);
        }
        break;
      }
    };
    
    var createChalkBoard = function createChalkBoard(options) {
      var mainContent = document.getElementById('main-content');
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
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
    };
    
    var setup = function setup(confg) {
      
      var configOptions = {};
      var defaults = {
        chalkboardColor: '#000000',
        chalkColor: '#ffffff',
        easerColor: '#000000',
        chalkboardTop: 0,
        chalkboardLeft: 0,
        chalkboardWidth: 900,
        chalboardHeight: 600
      };
      
      if (typeof config !== 'object') {
        console.log('You did not specify any options.  Using defaults');
        configOptions = defaults;
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
