angular.module('miApp')
.controller('UsuariosCtrl',['$scope', '$log', function($scope, $log){
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
	
	$scope.log = function(elem){
		$log.log(elem);
		$log.log(typeof(elem));
	};
}]);