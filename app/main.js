require.config({
    paths: {
        'app': 'app/app',

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
    },

    // kick start application
    deps: ['app']
});