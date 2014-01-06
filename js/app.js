// 'use strict';'ngGrid'  when('/titleid/:titleId/publisherid/:publisherId', {templateUrl: 'partials/details.html', controller: 'bookDetailsCtrl'}).,

var cbInv = angular.module('cbInv', [
    'cbInv.controllers',
    'cbInv.homeController',
    'cbInv.sideNavController',
    'cbInv.factory',
    'cbInv.directives',
    'cbInv.filters'
    ]).
         config (['$routeProvider', function($routeProvider){
            $routeProvider.
                    when('/', {templateUrl: 'partials/home.html', controller: 'summaryController' }).

                    otherwise({redirectTo: '/'});
      }]);

