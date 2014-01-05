// 'use strict';

var cbInv = angular.module('cbInv', ['cbInv.controllers', 'cbInv.factory', 'cbInv.directives','ui.bootstrap','ngGrid', 'cbInv.filters']).
         config (['$routeProvider', function($routeProvider){
            $routeProvider.
                    when('/', {templateUrl: 'partials/home.html', controller: 'homeCtrl' }).
                    when('/titleid/:titleId/publisherid/:publisherId', {templateUrl: 'partials/details.html', controller: 'bookDetailsCtrl'}).
                    otherwise({redirectTo: '/'});
      }]);

