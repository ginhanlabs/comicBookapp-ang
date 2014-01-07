angular.module('cbInv.homeController', [])
  .controller('summaryController', function($scope){
        $scope.valueByPublisher = {};


     /*   $scope.valueByPublisher["Marvel"] = "3344";
        $scope.valueByPublisher["DC"] = "1010"*/

        // same as sideNavModel
        $scope.PublishersList = [
            {"id":1, "publisherId": 1, "publisherName": "Marvel", "value":"343"},
            {"id":2, "publisherId": 2, "publisherName": "DC", "value":239},
            {"id":3, "publisherId": 3, "publisherName": "Image", "value":"123"}
        ]
  });