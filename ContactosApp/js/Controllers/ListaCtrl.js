angular.module('ContactosApp')
.controller('ListaCtrl', ['$scope', 'contactos', function($scope, contactos){
	$scope.contactos = contactos.lista();
}]);