cbInv.controller('sideNavigationController', ['$scope',  '$http','TitlesCollection', function($scope, $http, TitlesCollection) {
  TitlesCollection.getTitles().then(function(aData){
    $scope.titles = aData.TitlesList;
  });
}]);