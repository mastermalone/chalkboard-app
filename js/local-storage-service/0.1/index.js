require.config({
  paths: {
    'local-storage-impl': 'js/local-storage-service/0.1/index-impl'
  }
});

define(['local-storage-impl'], function localStroageService(localStorageService) {
  'use strict';
  
  return localStorageService;
  
});
