define([
    'angular', 'app', 'angular.route', 'angular.ui-bootstrap',
    './config', 
    './_common/app.common', './_common/app.common.req',
    './home/app.home', './home/app.home.req'
], function (angular) {

    var app = angular.module("myApp", [
        'ngRoute', 'ui.bootstrap',
        'app.config', 'app.common', 'app.home'
    ]);

    app.config(['$locationProvider', '$routeProvider', 'CONFIG', function ($locationProvider, $routeProvider, CONFIG) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when("/", {
                templateUrl: CONFIG.init.appPath + '/home/home.html',
                controller: function(){},
            })
            .otherwise({redirectTo: "/"});
    }]);
   

    return app;
});