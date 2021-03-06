angular.module('cbInv.directives', []).
    directive('chart', function(){
      return{
          restrict: 'E',
          link: function(scope, elem, attrs){
              var chart = null,
                  opts  = {
                              series: {
                                  bars: {
                                          show: true,
                                          barWidth: 0.6,
                                          align: "center"
                                  }
                              },
                              xaxis: {
                              mode: "categories",
                              tickLength: 0
                              }
                            };

              var data = scope[attrs.ngModel];

              scope.$watch(data[0].data, function(v){
                  if(!chart){
                      chart = $.plot(elem, [data[0].data],opts
                  );
                      elem.show();
                  }else{
                      chart.setData(elem.data);
                      chart.setupGrid();
                      chart.draw();
                  }
              });
          }
      };
    })/*
  .directive('collectionsSummary', function(){
      return {
        restrict: 'A',
        templateUrl : "templates/collectionSummary.tpl.htm",
        controller : "summaryController",
        link : function(scope, elem, attrs) {
        }

      }
})*/
  .directive('addPub', ['calcPubTotalVal',function(calcPubTotalVal){
        var total = 0;
        return {
            restrict: "A",

           link    : function(scope, elem, attrs){
             calcPubTotalVal.setPublisherValueTotal(attrs.p);
                console.log(calcPubTotalVal.getPublisherValueTotal());
             scope.publisherValTotal += total;
             //  scope.publisherValTotal = PublisherValueTotal.getPublisherValueTotal();
             /* ngModel.$setViewValue = function() {
                scope.publisherValTotal();*/
             // }


            }
        }
    }])
  .directive('pubTotal', ['calcPubTotalVal', function(calcPubTotalVal){
    return {
      restrict : "A",
      link : function(scope, elem, attrs){
          elem.html(calcPubTotalVal.getPublisherValueTotal());
      }
    }
  }]);
