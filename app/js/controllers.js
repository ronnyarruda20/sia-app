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

 var login, senha, usuario;

siaControllers.controller('Login',['$scope', 'LoginServices','$location',
	function($scope, LoginServices, $location){
		
 	LoginServices.user(function(comSucesso){
 		
 		usuario = comSucesso;

	},function(){
		$scope.resposta = 'Login ou Senha invalidos';
	});

	$scope.entrar = function(){

 	if($scope.name == usuario.CPF && $scope.senha == usuario.matricula){

 		$location.path('/Avaliacao');
 	}else{
 		$scope.resposta = 'Login ou Senha Invalido'
 	}
  }
	 
	
	}]);



	
  

 