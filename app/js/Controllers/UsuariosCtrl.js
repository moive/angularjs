angular.module('miApp')
.controller('UsuariosCtrl',['$scope', function($scope){
	$scope.usuario1 = {
		nombre: 'John',
		apellido: 'Doe',
		email: 'johndoe@example.com'
	};
	
	$scope.usuario2 = {
		nombre: 'Jane',
		apellido: 'Doe',
		email: 'janedoe@example.com'
	};
}]);