angular.module('cbInv.sideNavController', [])
  .controller('sideNavController', ['$scope','$http', 'PublishersListing','TitlesListing', function($scope, $http,PublishersListing, TitlesListing) {

     PublishersListing.getPublishers().success(function(aData){
        $scope.PublishersList = aData.PublisherList;
     });

    TitlesListing.getTitles().success(function(aData){
      $scope.TitlesList= aData.TitlesList;
    })


}]);