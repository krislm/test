/**
 * Created by Kris on 3/21/2016.
 */
var app = angular.module('app', [
    'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state({
            name: 'root',
            url: '',
            abstract: true,
            views: {
                'topbar': {
                    templateUrl: 'app/views/topbar.html',
                    controller: 'TopbarCtrl',
                    controllerAs: 'topbar'
                }
            }
        })
        .state({
            name: 'root.home',
            url: '/',
            views: {
                'container@': {
                    templateUrl: 'app/views/home.html',
                    controller: 'MainCtrl',
                    controllerAs: 'main'
                }
            }
        })
        .state({
            name: 'root.options',
            url:'/options',
            views: {
                'container@': {
                    templateUrl: 'app/views/options.html',
                    controller: 'OptionsCtrl',
                    controllerAs: 'options'
                }
            }
        })
        .state({
            name: 'root.about',
            url:'/about',
            views: {
                'container@': {
                    templateUrl: 'app/views/about.html',
                    controller: 'AboutCtrl',
                    controllerAs: 'about'
                }
            }
        })
        .state({
            name: 'root.publications',
            url:'/publications',
            views: {
                'container@': {
                    templateUrl: 'app/views/publications.html',
                    controller: 'PublicationsCtrl',
                    controllerAs: 'publications'
                }
            }
        });

    $urlRouterProvider.otherwise('/')
});

app.controller('TopbarCtrl', function($scope) {
    var vm = this;

    vm.links = [
        {name: 'home', url:'root.home'},
        {name: 'options', url: 'root.options'},
        {name: 'about', url:'root.about'},
        {name: 'publications', url:'root.publications'}
    ];
});

app.controller('MainCtrl', function($scope) {
    var vm = this;

});

app.controller('OptionsCtrl', function($scope) {
   var vm = this;
});

app.controller('AboutCtrl', function($scope) {
    var vm = this;
});

app.controller('PublicationsCtrl', function($scope) {
    var vm = this;
});