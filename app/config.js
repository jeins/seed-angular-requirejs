define(['angular'], function (angular) {
    'use strict';

    var config = angular.module('app.config', []);

    config.constant('CONFIG', {
        'init': {
            'appPath': 'public/app/'
        }
    })

    return config;
});