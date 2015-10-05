define([
    'angular', 'angular.route', 'angular.ui-bootstrap',
    'app.config'
], function (angular) {

    var app = angular.module("app", [
        'ngRoute', 'ui.bootstrap',
        'app.config'
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

    app.run();
    }]);

    return angular.bootstrap(app);
});