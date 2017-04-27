require.config({
  paths: {
    'chalk-service': 'js/chalk/0.1/chalk-service/0.1/index-impl'
  }
});

define(['chalk-service'], function chalk(chalkService) {
  'use strict';
  
  return (function chalk() {
    var createChalk = function createChalk(ctx) {
      console.log('Creating the chalk');
      //DOM stuf to make chalk image
    };
    
    return {
      createChalk: createChalk,
      service: chalkService
    };
  }());
});
