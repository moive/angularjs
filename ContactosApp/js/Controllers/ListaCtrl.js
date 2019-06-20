angular.module('myApp')
	.controller('ListaCtrl', ['$scope', 'contactos','$route', function($scope, contactos, $route){
		$scope.contactos = contactos.lista();
		console.log('my-property: ', $route.current.notes);
	}]);