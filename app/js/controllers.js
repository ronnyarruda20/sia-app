'use strict';

/* Controllers */

var siaControllers = angular.module('siaControllers', []);


var usuario,senha;

siaControllers.controller('ListaDeQuestao', ['$scope', 'Avaliacao', '$routeParams',
  function($scope, Avaliacao, $routeParams) {
   Avaliacao.buscaPorId({questaoId: $routeParams.questaoId},function(sucesso){
    	  $scope.perguntas = sucesso;
    },function(){
    	$scope.semSucesso = 'Sem valor a apresentar';
    });
  }]);

siaControllers.controller('Login',['$scope', 'LoginServices','$routeParams',
	function($scope, LoginServices, $routeParams){

		$scope.login = function(){
		var user =	LoginServices.login();
		if($scope.user.nome == user.CPF ){
			console.log('usuario existe');
		}
		}

	}]);


