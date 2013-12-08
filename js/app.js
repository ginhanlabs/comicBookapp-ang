// 'use strict';

var cbInvd = angular.module('cbInv', ['cbInv.controllers', 'cbInv.factory', 'cbInv.directives','ui.bootstrap','ngGrid', 'cbInv.filters']).
         config (['$routeProvider', function($routeProvider){
            $routeProvider.
                    when('/', {templateUrl: 'partials/home.html', controller: 'CBInvHomeCtrl' }).
                    when('/titleid/:titleId/publisherid/:publisherId', {templateUrl: 'partials/details.html', controller: 'CBInvDetailsCtrl'}).
                    otherwise({redirectTo: '/'});
      }]);

