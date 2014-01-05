angular.module('cbInv.controllers').
    controller('bookDetailsCtrl', ['$scope', '$routeParams', '$http','TitlesCollection', 'PublishersCollection',  function($scope, $routeParams, $http, TitlesCollection, PublishersCollection) {

  var selectedTitle="";
    TitlesCollection.getTitles().then(function(aData){
      $scope.titles = aData.TitlesList;
    });

  /* why does the http.get not work? *//*
  var PublisherList = $scope.publishers;
  var TitlesList = $scope.titles;

  $scope.selectedTitle = "";
  $scope.selectedPublisher = "";
  $scope.selectedBook = [];
  $scope.detailSummary = {"totalIssues": 0, "totalPrice": 0, "totalValue": 0};

  $scope.hasDetailedListing = false;
  var bookDetail = {};

  // if ($routeParams.titleId != "" or $routeParams.titleId != undefined) {
  for (var p=0; p < PublisherList.length; p++){
    if (PublisherList[p].publisherId == $routeParams.publisherId){
      $scope.selectedPublisher = PublisherList[p].publisherName;
      break;
    }
  }

  for (var i=0; i < TitlesList.length; i++) {
    if (TitlesList[i].titleId == $routeParams.titleId){
      $scope.selectedTitle = TitlesList[i].title;
      if (TitlesList[i].Issues != undefined){
        $scope.selectedBook = TitlesList[i].Issues;
        // bool to show table or not
        $scope.hasDetailedListing = true;
        break;
      }
      else
      {
        // needed if using ng-grid
        // $scope.selectedBook = [ {'No issues': 'No issues' }];
        $scope.hasDetailedListing = false;
      }
    }
  };

  // $scope.detailSummary = {"totalIssues": 50, "totalPrice": 3.99, "totalValue": 33.33};
//            $scope.detailSummary = function(){
//           
  if ($scope.hasDetailedListing) {
    var totalPrice = 0;
    var totalValue = 0;
    if ( $scope.hasDetailedListing ) {
      var numIssues = $scope.selectedBook.length;
      if (numIssues > 0){
        $scope.detailSummary.totalIssues = numIssues;
        for (var n=0; n < numIssues; n++){
          totalPrice += Number($scope.selectedBook[n].Price);
          totalValue += Number($scope.selectedBook[n].Value);
        }
        $scope.detailSummary.totalPrice = totalPrice.toFixed(2);
        $scope.detailSummary.totalValue = totalValue.toFixed(2);
      }
    }
  }*/
}]);