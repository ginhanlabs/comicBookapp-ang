'use strict';
angular.module('cbInv.factory', [])
    .factory('TitlesListing', function($http){
    return {
      getTitles: function(){
        return $http.get('data/publisherData.json')
      }
    }
  })
  .factory('PublishersListing', function($http){
    return {
      getPublishers: function(){
        return $http.get('data/publisherData.json')
      }
    }
  })

  .factory('PublisherValueTotal', function(){
       var t = {};
        t.total = 0;
       return {
           setPublisherValueTotal : function(value) {
             return t.total+= parseInt(value);
           },
           getPublisherValueTotal : function(){
             return t.total;
           }

       }
    })



  /*.factory('SelectedPublisher', function(v){
    var sp = {};
    sp.pub = 0;
    sp.getPublisher = function(){
      return sp.pub;
    }
    sp.setPublisher = function(v){
      this.pub = v;
    }
    return sp;
  })*/
