'use strict';

/* Services */

var avaliacaoServices = angular.module('avaliacaoServices', ['ngResource']);

avaliacaoServices.factory('Avaliacao', ['$resource',
  function($resource){
    return $resource('json/questoes.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);
