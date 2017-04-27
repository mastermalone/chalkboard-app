require.config({
  paths: {
   
  }
});

//define(['chalkboard-service', 'chalk', 'controls'], function chalkboard(chalkboardService, chalk, controls) {
define([], function chalkboard() {
  'use strict';
  //Set up DOM stuff for the chalkboard
  return (function chalkboard() {
    var mouseDown = null;
    
    //Default Chalkboard Options
    var defaultOptions = {
      chalkboardColor: '#000000',
      chalkColor: '#ffffff',
      easerColor: '#000000',
      chalkboardTop: 0,
      chalkboardLeft: 0,
      chalkboardWidth: 900,
      chalboardHeight: 600
    };
    
    var getChalkColor = function getChalkColor() {
      var cColor =  window.localStorage.chalkcolor !== undefined ? window.localStorage.chalkcolor : defaultOptions.chalkColor;
      return cColor;
    };
    
    var fireEvents = function fireEvents(e) {
      switch(e.type) {
        case 'mousedown':
        mouseDown = true;
        break;
        case 'mouseup':
        mouseDown = false;
        break;
        case 'mousemove':
        if (mouseDown === true) {
           //We need to call the draw line function from the chalk service
        }
        break;
      }
    };
    
    var createChalkBoard = function createChalkBoard(options) {
      var mainContent = document.getElementById('main-content');
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
 
      console.log('Adding Chalkboard to DOM');
      
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
      //Called by the app.init function
      var configOptions = {};
      
      //If there is no custom configuration, use the defualt configuration
      if (typeof config !== 'object') {
        console.log('You did not specify any options.  Using default configuration options');
        configOptions = defaultOptions;
      }else {
        configOptions = confg;
      }
      
      createChalkBoard(configOptions);
    };
    
    return {
      setup: setup
    };
  }());
});
