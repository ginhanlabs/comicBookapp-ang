angular.module('cbInv.homeController', [])
  .controller('summaryController', ['$scope','$http', 'PublishersListing','TitlesListing', function($scope, $http,PublishersListing, TitlesListing) {
        $scope.totalValueByPublisher = "705";
        // $scope.totalIssues = "395";
    $scope.predicate = "-totalIssues";
    $scope.limitNumber = 3;

     /*   $scope.valueByPublisher["Marvel"] = "3344";
        $scope.valueByPublisher["DC"] = "1010"*/

    PublishersListing.getPublishers().success(function(aData){
      $scope.PublishersList = aData.PublisherList;
    });

    TitlesListing.getTitles().success(function(aData){
      $scope.TitlesList= aData.TitlesList;
    })
        // same as sideNavModel
       /* $scope.PublishersList = [
            {"id":1, "publisherId": 1, "publisherName": "Marvel", "value":"343"},
            {"id":2, "publisherId": 2, "publisherName": "DC", "value":"239"},
            {"id":3, "publisherId": 3, "publisherName": "Image", "value":"123"}
        ]*/

       /* $scope.TotalIssuesPerTitle = [
            {"id":1, "titleId":"1", "totalIssues":"200"},
            {"id":2, "titleId":"2", "totalIssues":"55"},
            {"id":3, "titleId":"3", "totalIssues":"140"}
        ]*/
    }]);