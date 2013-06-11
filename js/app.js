// 'use strict';


// Declare app level module which depends on filters, and services
//angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
//  config(['$routeProvider', function($routeProvider) {
//    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
//    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
//    $routeProvider.otherwise({redirectTo: '/view1'});,'ngGrid'
//  }]);
//,'cbInv.filters', 'cbInv.directives'
var cbInv = angular.module('cbInv', ['cbInv.controllers','cbInv.directives','ui.bootstrap','ngGrid', 'cbInv.filters']).
         config (['$routeProvider', function($routeProvider){
            $routeProvider.
                    when('/', {templateUrl: 'partials/home.html', controller: 'CBInvHomeCtrl' }).
                    when('/titleid/:titleId/publisherid/:publisherId', {templateUrl: 'partials/details.html', controller: 'CBInvDetailsCtrl'}).
                    otherwise({redirectTo: '/'});
      }]);

