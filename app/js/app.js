'use strict';

/* App Module */

var siaApp = angular.module('siaApp', [
  'ngRoute',
  'phonecatAnimations',
  'siaControllers',
  'avaliacaoServices'
]);

siaApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/avaliacao', {
        templateUrl: 'paginas/listaDePerguntas.html',
        controller: 'ListaDeQuestao'
      }). 
      when('/login',{
          templateUrl: 'paginas/login.html',
          controller:'Login'
      }).
      when('/precadastro',{
          templateUrl:'paginas/formPreCadastro.html',
          controller:'PreCadastro'
      }).
      otherwise({
        redirectTo:'/login'
      });
  }]);

