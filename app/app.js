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

    app.config(['$urlRouterProvider', '$stateProvider', 'CONFIG', function ($urlRouterProvider, $stateProvider, CONFIG) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/home/templates/home.html',
                controller: 'CtrlHome as vm'
            })
    }]);
   
    app.run();
    return app;
});