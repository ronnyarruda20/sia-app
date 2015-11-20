'use strict';

/* jasmine specs for controllers go here */
describe('Sia APP controllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('siaApp'));
 
 beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('json/login/123.json').
        respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

    scope = $rootScope.$new();
    ctrl = $controller('Login', {$scope: scope});
  }));


});
