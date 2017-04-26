require.config({
  paths: {
    'chalkboard': 'js/chalkboard/0.1/index'
  }
});

define([
  'chalkboard',
  'es6', 
  'babel',
  ], 
  function app(chalkboard) {
  'use strict';
  
  var app = {
    init:  function init() {
      console.log('initializing');
      chalkboard.setup();
    }    
  };
  
  return {
    init: app.init
  };
});
