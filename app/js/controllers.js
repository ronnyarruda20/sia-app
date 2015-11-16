'use strict';

/* Controllers */

var siaControllers = angular.module('siaControllers', []);

siaControllers.controller('ListaDeQuestao', ['$scope', 'Avaliacao',
  function($scope, Avaliacao) {
    $scope.perguntas = Avaliacao.query();
  }]);

siaControllers.controller('Login',['$scope', 'Avaliacao',
	function($scope, Avaliacao){
		$scope.usuario = "ronny",
		$scope.senha = "123"
	}]);


var entrar = function(){
	var nome = $scope.data.nome;
	var senha = $scope.data.senha;
	if(nome = $scope.usuario.nome && senha.usuario.senha){
		$loca
	}
}