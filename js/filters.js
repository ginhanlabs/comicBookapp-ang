'use strict';

/* Filters */

angular.module('cbInv.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);
//      .
// filter('filterByPublisher', function(){
//    return function(bookCollection,pubId){
//        var newBooks = [];
//        for (var i=0; i< bookCollection.length; i++){
//          if (bookCollection.publisherId === pubId) {
//              newBooks.push(bookCollection[i]);
//            };
//          };  
//      return newBooks;
//    };
//});;
