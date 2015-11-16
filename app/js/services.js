'use strict';

/* Services */

var avaliacaoServices = angular.module('avaliacaoServices', ['ngResource']);

avaliacaoServices.factory('Avaliacao', ['$resource',
  function($resource){
    return $resource('json/questoes.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);

 avaliacaoServices.factory('LoginServices', ['$http',
	function($http){
		return $http({
  method: 'GET',
  url: 'json/usuario.json'
   	}).then(function successCallback(response) {

   		return response;
     
  	}, function errorCallback(response) {
  	console.log('sem sucesso');
  });


 }]);