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
      when('/avaliacao/:questaoId', {
        templateUrl: 'paginas/listaDePerguntas.html',
        controller: 'ListaDeQuestao'
      }).
      when('/login',{
          templateUrl: 'paginas/login.html',
          controller:'Login'
      }).
      otherwise({
        redirectTo:'/avaliacao'
      });
  }]);

