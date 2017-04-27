require.config({
  paths: {
    'local-storage-service': 'js/local-storage-service/0.1/index'
  }
});

define(['local-storage-service'], function controls(localStroageService) {
  'use strict';
  
  return (function canvasControlsFactory() {
    var context = {};
    var configOptions = {};
    
    var getContextAndOptions = function getContextAndOptions(ctx, options) {
      //Gets the Canvas Context and the Chalkboard Configuration options
      context = ctx;
      configOptions = options;
    };
    
    var chalk = function chalk(e) {
      console.log('Chalk');
      context.strokeStyle = configOptions.chalkColor;
      localStroageService.setLocalStorageValue('chalkcolor', configOptions.chalkColor);
    };
    
    var eraser = function eraser(e) {
      console.log('Erasing');
      context.strokeStyle = configOptions.chalkboardColor;
      localStroageService.setLocalStorageValue('chalkcolor', configOptions.chalkboardColor);
      console.log('Erasing');
    };
    
    var clearBoard = function clearBoard(e) {
      console.log('Clearing', context);
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      context.fillRect(configOptions.chalkboardLeft, configOptions.chalkboardTop, configOptions.chalkboardWidth, configOptions.chalboardHeight);
      context.fillStyle = configOptions.chalkboardColor;
    };
    
    var controlsArray = ['Chalk', 'Eraser', 'Clear Board'];
    var methods =  [chalk, eraser, clearBoard];
    var list = document.createElement('ul');
    var frag = document.createDocumentFragment();
    
    var build = function build() {
      controlsArray.map(function mapControls(item, index) {
        console.log('controls array item:', item);
        var li = document.createElement('li');
        li.innerHTML = item;
        li.addEventListener('click', methods[index], true);
        frag.appendChild(li);
      });
      
      list.id = 'controls';
      list.appendChild(frag);
      return list;
    };
    
    return {
      build: build,
      getContextAndOptions: getContextAndOptions
    };
  }());
});
