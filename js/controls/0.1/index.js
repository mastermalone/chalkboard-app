define([], function controls() {
  'use strict';
  
  return (function canvasControlsFactory() {
    var context = {};
    var configOptions = {};
    
    var getContextAndOptions = function getContextAndOptions(ctx, options) {
      //Gets the Canvas Context
      context = ctx;
      configOptions = options;
    };
    
    var chalk = function chalk(e) {
      console.log('Chalk');
      context.strokeStyle = configOptions.chalkColor;
    };
    
    var eraser = function eraser(e) {
      console.log('Erasing');
      context.strokeStyle = configOptions.easerColor;
    };
    
    var clearBoard = function clearBoard(e) {
      console.log('Clearing', context);
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      context.fillRect(configOptions.chalkboardLeft, configOptions.chalkboardTop, configOptions.chalkboardWidth, configOptions.chalboardHeight);
      context.fillStyle = '#000000';
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
