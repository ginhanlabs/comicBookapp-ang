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
      saveTitle: function(t){
        ;
      }
    }

});
