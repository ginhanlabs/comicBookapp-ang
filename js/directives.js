//'use strict';
//
///* Directives */
//
//
    angular.module('cbInv.directives', []).
        directive('chart', function(){
            return{
                restrict: 'E',
                link: function(scope, elem, attrs){
                    var chart = null,
                        opts  = { };

                    var data = scope[attrs.ngModel];            

                    scope.$watch('data', function(v){
                        if(!chart){
                            chart = $.plot(elem, v , opts);
                            elem.show();
                        }else{
                            chart.setData(v);
                            chart.setupGrid();
                            chart.draw();
                        }
                    });
                }
            };
        });
//        directive('titlesBypub', function(){
//            return {
//                restrict: 'A',
//////               template: '<select ><option>--</option></select>',
////                  template: '<div ng-show=>dd</div>',
//                    template: '<select >' + // ng-model="selectedTitle" ng-change="setTitle(selectedTitle)"
//                             '<li ng-repeat="t in titlesm ">' + //ng-repeat="t in title"
//                            '{{ t.title }}</li>' +
//                          '</select>',
////                   template: '<select ng-options="t.title for t in titles " ng-model="selectedTitle " ng-change="setTitle(selectedTitle)"></select>',
//                scope: {
//                   pattr:'='
//                },
//                link: function (scope, element, attributes){
//                    var popTitles = function() {
//                     scope.titlesm = [{"title": "a"},{"title": "b"}];
//                     return;
//                   
//                    };
//                    
//                    scope.$watch('pattr', function(oldVal, newVal) {
////                        if (newVal === undefined){
////                            newVal = '333';
////                        }
//                        console.log(scope.pattr + "  " + oldVal + " " + newVal);
//                    if (newVal) {
//                        
//                      popTitles();
//                    }
//                  });
//                }
//            };
//        });    

            
//    directive('fundooRating', function () {
//    return {
//      restrict: 'A',
//      template: '<ul class="rating">' +
//                  '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
//                    '\u2605' +
//                  '</li>' +
//                '</ul>',
//      
//      scope: {
//        ratingValue: '=',
//        max: '=',
//        readonly: '@',
//        onRatingSelected: '&'
//      },
//      link: function (scope, elem, attrs) {
//
//        var updateStars = function() {
//          scope.stars = [];
//          for (var  i = 0; i < scope.max; i++) {
//            scope.stars.push({filled: i < scope.ratingValue});
//          }
//        };
//
//        scope.toggle = function(index) {
//          if (scope.readonly && scope.readonly === 'true') {
//            return;
//          }
//          scope.ratingValue = index + 1;
//          scope.onRatingSelected({rating: index + 1});
//        };
//
//        scope.$watch('ratingValue', function(oldVal, newVal) {
//          if (newVal) {
//            updateStars();
//          }
//        });
//      }
//    };
//  });
//  directive('appVersion', ['version', function(version) {
//    return function(scope, elm, attrs) {
//      elm.text(version);
//    };
//  }]).
//  directive('fundooRating', function(){
//    return {
//        restrict: 'A',
//        template: '<ul>' +
//                    '<li ng-repeat="star in stars" class="filled">' +
//                    '\u2605' + 
//                    '</li>' +
//                    '</ul>',
//        scope: {
//            ratingValue: '='
//        },
//        link: function (scope, elem, attrs) {
//            var updateStars = function() {
//      scope.stars = [];
//      for(var i = 0; i < scope.max; i++) {
//         scope.stars.push({filled: i < scope.ratingValue});
//      }
//  };
//
//  scope.$watch('ratingValue', function(oldVal, newVal) {
//     if(newVal) {
//       updateStars();
//     }
// });
//        }
//    };
//  });