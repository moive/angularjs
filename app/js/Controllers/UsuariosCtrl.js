angular.module('miApp')
.controller('UsuariosCtrl',['$scope', function($scope){
	$scope.usuario = {
		nombre: 'John',
		apellido: 'Doe',
		email: 'johndoe@example.com'
	};
}]);