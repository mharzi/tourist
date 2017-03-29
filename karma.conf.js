module.exports = function(config) {
    config.set({

        basePath: '',
        frameworks: ['browserify', 'jasmine'],

        files: [
            'test/karma/**/*spec.js'
        ],

        exclude: [
        ],

        browserify: {
            debug: true,
            transform: [ ]
        },

        preprocessors: {
        },
        reporters: ['progress'],
        port: 9876,

        colors: true,
        logLevel: config.LOG_DEBUG,
        autoWatch: true,
        singleRun: false,
        concurrency: Infinity
    });
};