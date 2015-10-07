require.config({
    paths: {
        'app': './app',

        'angular': '../lib/angular/angular',
        'angular.ui-bootstrap': '../lib/angular-bootstrap/ui-bootstrap.min',
        'angular.route': '../lib/angular-route/angular-route.min'
    },
    shim: {
        'angular' : {
            exports : 'angular'
        },
        'angular.route': {
            deps : ['angular']
        },
        'angular.ui-bootstrap': {
            deps : ['angular']
        }
    }
});

require(['angular', 'app'], function(angular, app){
    var $html = angular.element(document.getElementsByTagName('html')[0]);
        angular.element().ready(function() {
            // bootstrap the app manually
            angular.bootstrap(document, ['myApp']);
        }, false);
})