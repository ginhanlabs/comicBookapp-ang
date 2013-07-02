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
});
      
