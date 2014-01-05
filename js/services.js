'use strict';

/* Services */


angular.module('cbInv.factory', [])
    .factory('TitlesCollection', function($http){
    return {

      getTitles: function(){
        var promise = $http.get('data/titlesData.json').then(function(response){
          return response.data;
        });
        return promise;
      },
      getSelectedTitle: function($http, title) {
        // to do - pass in param
        var promise = $http.get('data/titlesData.json').then(function(response){
          return response.data;
        });
        return promise;
      },
      saveTitle: function(t){
        ;
      }
    }
  })
  .factory('PublishersCollection', function($http){
    return {
      getPublishers: function(){
        var promise = $http.get('data/publisherData.json').then(function(response){
          return response.data;
        });
        return promise;
      }
    }
  })
