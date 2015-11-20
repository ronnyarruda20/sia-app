'use strict';

/* Services */

var avaliacaoServices = angular.module('avaliacaoServices', ['ngResource']);

avaliacaoServices.factory('Avaliacao', ['$resource',
  function($resource){
    return $resource('json/questoes/:questaoId.json', {}, {  
      buscaPorId: {method:'GET', params:{questaoId:'questoes'}}
    });
  }]);

 avaliacaoServices.factory('LoginServices', ['$resource',
	function($resource){
		return $resource('json/login/:loginId.json', {},{
      user:{method:'GET',params:{loginId:'loginId'}}
    });

 }]);

 