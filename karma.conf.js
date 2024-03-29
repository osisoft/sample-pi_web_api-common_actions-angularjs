//jshint strict: false
module.exports = function (config) {
  config.set({
    client: {
      jasmine: {
        random: false,
      },
    },

    basePath: '',

    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/jasmine-jquery/lib/jasmine-jquery.js',
      'app.js',
      'app.spec.js',
      {
        pattern: '*.json',
        watched: true,
        served: true,
        included: false,
      },
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: ['karma-chrome-launcher', 'karma-jasmine', 'karma-junit-reporter'],

    singleRun: true,

    reporters: ['progress', 'junit'],

    junitReporter: {
      outputDir: './junitResults',
      suite: '',
      useBrowserName: true,
      nameFormatter: undefined,
      classNameFormatter: undefined,
      properties: {},
    },

    port: 9876,
  });
};
