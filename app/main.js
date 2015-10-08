require.config({
    paths: {
        'app': './app',

        'angular': '../lib/angular/angular',
        'angular.ui-bootstrap': '../lib/angular-bootstrap/ui-bootstrap.min',
        'angular.ui-router': '../lib/angular-ui-router/release/angular-ui-router.min'
    },
    shim: {
        'angular' : {
            exports : 'angular'
        },
        'angular.ui-router': {
            deps: ['angular']
        },
        'angular.ui-bootstrap': {
            deps : ['angular']
        }
    }
});

require(['angular', 'app'], function(angular, app){
    // angular.element().ready(function() {
    //     // bootstrap the app manually
    //     angular.bootstrap(document, ['myApp']);
    // }, false);
    angular.bootstrap(document, ['app']);
    // var $html = angular.element(document.getElementsByTagName('html')[0]);console.log($html);   
})