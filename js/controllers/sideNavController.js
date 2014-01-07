angular.module('cbInv.sideNavController', [])
  .controller('sideNavController', ['$scope',  '$http','PublishersListing', function($scope, $http, PublishersListing) {
    /*PublishersListing.getPublishers().then(function(aData){
    $scope.publishers = aData.Publishers;
  });*/
    $scope.PublishersList = [
      {"id":1, "publisherId": 1, "publisherName": "Marvel", "value":"343"},
      {"id":2, "publisherId": 2, "publisherName": "DC", "value":239},
      {"id":3, "publisherId": 3, "publisherName": "Image", "value":"123"}
    ]
    $scope.TitlesList = [
      {"id": 1, "titleId": 1, "publisherId": 1, "title": "Amazing Spider-man and friends",
        "Issues":[
          {"Issue": 1, "Price": 1.99, "Qty": 1, "Condition": "Good", "Value": 2.99, "Box": 1, "Notes": "", "YYYYMM": "2013-01" },
          {"Issue": 2, "Price": 2.22, "Qty": 1, "Condition": "Good", "Value": 0.75, "Box": 1, "Notes": "", "YYYYMM": "2013-01" },
          {"Issue": 3, "Price": 3.33, "Qty": 1, "Condition": "Good", "Value": 3.99, "Box": 1, "Notes": "", "YYYYMM": "2013-01" },
          {"Issue": 4, "Price": 4.44, "Qty": 1, "Condition": "Good", "Value": 1.99, "Box": 1, "Notes": "", "YYYYMM": "2013-01" },
          {"Issue": 5, "Price": 5.55, "Qty": 1, "Condition": "Good", "Value": 2.00, "Box": 1, "Notes": "", "YYYYMM": "2013-01" },
          {"Issue": 6, "Price": 6.66, "Qty": 1, "Condition": "Good", "Value": 2.99, "Box": 1, "Notes": "", "YYYYMM": "2013-01" },
          {"Issue": 10, "Price": 7.77, "Qty": 1, "Condition": "Fine", "Value": 0.75, "Box": 1, "Notes": "", "YYYYMM": "2013-01" },
          {"Issue": 12, "Price": 8.88, "Qty": 1, "Condition": "Good", "Value": 1.00, "Box": 1, "Notes": "", "YYYYMM": "2013-01" },
          {"Issue": 16, "Price": 9.99, "Qty": 2, "Condition": "Fine", "Value": 2.99, "Box": 1, "Notes": "", "YYYYMM": "2013-01" },
          {"Issue": 14, "Price": 10.11, "Qty": 1, "Condition": "Good", "Value": 1.99, "Box": 1, "Notes": "", "YYYYMM": "2013-01" },
          {"Issue": 15, "Price": 11.22, "Qty": 1, "Condition": "Good", "Value": 2.00, "Box": 1, "Notes": "", "YYYYMM": "2013-01" },
          {"Issue": 22, "Price": 12.33, "Qty": 1, "Condition": "Good", "Value": 2.99, "Box": 1, "Notes": "", "YYYYMM": "2013-01" },
          {"Issue": 34, "Price": 13.49, "Qty": 1, "Condition": "Good", "Value": 1.99, "Box": 1, "Notes": "", "YYYYMM": "2013-01" },
          {"Issue": 15, "Price": 14.59, "Qty": 1, "Condition": "Good", "Value": 2.00, "Box": 1, "Notes": "", "YYYYMM": "2013-01" },
          {"Issue": 106, "Price":15.69, "Qty": 1, "Condition": "Good", "Value": 2.99, "Box": 1, "Notes": "", "YYYYMM": "2013-01" }
        ]},
      {"id": 2, "titleId": 2, "publisherId": 1, "title": "Mighty Thor",
        "Issues":[
          {"Issue": 1, "Price": 2.99, "Qty": 1, "Condition": "Poor", "Value": 500, "Box": 11, "Notes": "" , "YYYYMM": "2013-01"}
        ]},
      {"id": 3, "titleId": 3, "publisherId": 2, "title": "Batman"},
      {"id": 4, "titleId": 4, "publisherId": 3, "title": "Savage Dragon"},
      {"id": 5, "titleId": 5, "publisherId": 2, "title": "Teen Titans"},
      {"id": 6, "titleId": 6, "publisherId": 2, "title": "Blue Beetle"},
      {"id": 7, "titleId": 7, "publisherId": 1, "title": "Captain America"},
      {"id": 8, "titleId": 8, "publisherId": 1, "title": "Avengers"},
      {"id": 9, "titleId": 9, "publisherId": 3, "title": "Spawn"}
      ]
}]);