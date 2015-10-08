define([
    'angular', 'app', 'angular.ui-router',
    './config', 
    './_common/app.common', './_common/app.common.req',
    './home/app.home', './home/app.home.req'
], function (angular) {

    var app = angular.module('app', [
        'ui.router', 
        'app.config', 'app.common', 'app.home'
    ]);

    app.config(['$urlRouterProvider', '$locationProvider', function ($urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');
        $urlRouterProvider.otherwise('/');
    }]);
   
    app.run();
    return app;
});