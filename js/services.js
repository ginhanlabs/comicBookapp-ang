'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('cbInv.services', ['ngResource']).
        factory('cbData', function($resource){
//            return $resource('data/', {}, {
//            )
        });
  //value('version', '0.1');
//  factory('reset', ['$scope', function($scope){
//      $scope.master= {};
//   
//      $scope.reset = function() {
//          $scope.newTitle = angular.copy($scope.master);
//        };
//       
//      $scope.reset();
 // }]);