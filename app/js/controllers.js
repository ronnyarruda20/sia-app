'use strict';

/* Controllers */

var siaControllers = angular.module('siaControllers', ['ngStorage']);


siaControllers.controller('ListaDeQuestao', ['$scope', 'Avaliacao', '$routeParams','$sessionStorage',
  function($scope, Avaliacao, $routeParams, $sessionStorage) {
  	
  	$routeParams.questaoId = $sessionStorage.soma;
   Avaliacao.buscaPorId({questaoId: $routeParams.questaoId},function(sucesso){
   	
    	  $scope.perguntas = sucesso;
    	  $scope.perfil = $sessionStorage.perfil;

    },function(){

    	$scope.semSucesso = 'Sem valor a apresentar';

    });
   $scope.somar = function(){
   		$sessionStorage.soma += 1;
   		location.reload();
   }
  }]);

 

siaControllers.controller('Login',['$scope', 'LoginServices','$location', '$sessionStorage',
	function($scope, LoginServices, $location, $sessionStorage){
	
	var usuarios;
	
	$scope.entrar = function(){

		LoginServices.user({loginId: $scope.nome}, function(comSucesso){
			usuarios = comSucesso;
			$sessionStorage.perfil = usuarios.perfil;
			if($scope.nome == usuarios.CPF && $scope.senha == usuarios.matricula){

				$location.path('/avaliacao');

			}else{

				$scope.valorIncorreto = 'Login ou senha incorretos';
			}
		},function(semSucesso){

			$scope.valores = 'Login ou senha incorreto 2';
		});
		
 	
	}

	
	
}]);



	
 

 