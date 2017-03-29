module.exports = function(config) {
    config.set({

        basePath: '',
        frameworks: ['jasmine'],

        files: [
            'test/karma/*spec.js'
        ],

        exclude: [
        ],

        preprocessors: {
        },
        reporters: ['progress'],
        port: 9876,

        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        singleRun: false,
        concurrency: Infinity
    });
};