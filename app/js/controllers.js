'use strict';

/* Controllers */

var siaControllers = angular.module('siaControllers', []);


var usuario,senha;

siaControllers.controller('ListaDeQuestao', ['$scope', 'Avaliacao',
  function($scope, Avaliacao) {
    $scope.perguntas = Avaliacao.query();
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


