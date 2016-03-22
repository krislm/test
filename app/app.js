/**
 * Created by Kris on 3/21/2016.
 */
var app = angular.module('app', [
    'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: 'main',
        url: '/',
        views: {
            'main': {
                templateUrl: 'app/views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            }
        }
    });

    $urlRouterProvider.otherwise('/')
});

app.controller('MainCtrl', function($scope) {
    var vm = this;
    vm.state = 0;

    vm.show = false;
    vm.items = ['test1', 'test2', 'test3'];
    vm.menu = [
        {
            title: 'heading1',
            items: ['test1', 'test2', 'test3']
        },
        {
            title: 'heading2',
            items: ['test1', 'test2', 'test3']
        },
        {
            title: 'heading3',
            items: ['test1', 'test2', 'test3']
        }
    ];

    vm.dropTheBeat = function(i){
        vm.state = i;
    };

});