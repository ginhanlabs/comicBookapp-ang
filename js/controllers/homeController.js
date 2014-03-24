angular.module('cbInv.homeController', [])
  .controller('summaryController', ['$scope','$http', 'PublishersListing','TitlesListing','PublisherValueTotal',
        function($scope, $http, PublishersListing, TitlesListing,PublisherValueTotal) {
    $scope.predicate = "-totalIssues";
    $scope.limitNumber = 3;
  $scope.publisherValTotal = function(){
      PublisherValueTotal.getPublisherValueTotal();
  };

    PublishersListing.getPublishers().success(function(aData){
      $scope.PublishersList = aData.PublisherList;
    });

    TitlesListing.getTitles().success(function(aData){
      $scope.TitlesList = aData.TitlesList;
    })

    /*$scope.$watch('PublishersList', function(){
      var t = 0;
    *//* for (var i=0;i< $scope.PublishersList.length; i++){
       t += parseInt($scope.PublishersList[i].value);
     }*//*
      $scope.totalCollectionValue = t;
    })

    $scope.$watch('TitlesList', function(){
      var t = 0;
      *//*for (var i=0;i< $scope.TitlesList.length; i++){
        t += parseInt($scope.TitlesList[i].totalIssues);
      }*//*
      $scope.totalIssues = t;
    })*/




    }])
