define([], function localStroageService() {
  'use strict';
  
  return (function localStroageFactory() {
    var ls = {};
    if (window.localStorage) {
      ls = window.localStorage;
    }
    
    var setLocalStorageValue = function setLocalStorageValue(key, value) {
      ls.setItem(key, value);
    };    
    return {
      setLocalStorageValue: setLocalStorageValue,
    };
  }());
});