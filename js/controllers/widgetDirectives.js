angular.module('cbInv.directives', []).
  directive('marvelCollection', function(){
    return{
      restrict: 'A',
      transclude: true,
      template: "<div class='happy'>{{mValue}}</div>",
      scope: {
          "_valuePerPublisher": '&valuePerPublisher'
      },

      link: function($scope, elem, attrs){
        var total = "";


      }
       /* $scope.mValue = "33";
          }*/

    }
  })
;


