angular.module('myApp')
	.controller('EditarCtrl', ['$scope', 'contactos', '$location','$routeParams', function($scope, contactos, $location, $routeParams){
		if(!$routeParams.id && !contactos.ver($routeParams.id)){
			$location.path('/');
		}
		
		//var contacto = contactos.ver($routeParams.id);
		var contacto = $scope.contacto = angular.copy(contactos.ver($routeParams.id))
		
		$scope.cancelar = function(){
			$location.path('/' + $routeParams.id);
		};
		
		$scope.guardar = function(){
			contactos.editar($routeParams.id, contacto)
			$location.path('/' + $routeParams.id);
		};
	}])