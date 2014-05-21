angular.module('cbInv.menuController', ['ui.bootstrap'])
  .controller('mainMenuController', ['$scope', '$modal', '$log','PublishersListing',  function($scope, $modal, $log, PublishersListing) {

      $scope.openPublisherModal = function(){
        var modalPublisherInstance = $modal.open({
          templateUrl: 'partials/modalPublisher.html',
          controller: ModalPublisherInstanceController,
          resolve: {}
        })

        modalPublisherInstance.result.then(function(){
          $log.info("do something here");
        }, function(){
          $log.info('modal publisher dismissed');
        })
      }

     var ModalPublisherInstanceController = function($scope, $modalInstance){
       PublishersListing.getPublishers().success(function(aData){
         $scope.PublishersList = aData.PublisherList;
       })

      $scope.ok = function () {
        $modalInstance.close();
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    }


    $scope.openTitleModal = function(){
      var modalTitleInstance = $modal.open({
        templateUrl: 'partials/modalTitle.html',
        controller: ModalTitleInstanceController,
        resolve: {}
      })

      modalTitleInstance.result.then(function(){
        $log.info("do something here");
      }, function(){
        $log.info('modal title dismissed');
      })
    }

    var ModalTitleInstanceController = function($scope, $modalInstance){
      $scope.ok = function () {
        $modalInstance.close();
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    }
  }]);
