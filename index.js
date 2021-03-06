require.config({
  baseUrl: './',
  paths: {
    'es6': 'bower_components/requirejs-babel/es6',
    'babel': 'bower_components/requirejs-babel/babel-5.8.34.min',
    'text': 'bower_components/text/text',
    'app': 'js/app/index'
  }
});

require(['app'], function startApplication(app) {
  app.init();
});
