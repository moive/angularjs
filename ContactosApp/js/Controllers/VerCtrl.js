angular.module('myApp')
	.controller('VerCtrl', ['$scope', '$routeParams', 'contactos', '$location', function($scope, $routeParams, contactos, $location){
		if(contactos.ver($routeParams.id)){
			$scope.contacto = contactos.ver($routeParams.id)
		}else{
			$location.path('/');
		}
		
		$scope.borrar = function(){
			if(contactos.borrar($routeParams.id)){
				$location.path('/');
			}else{
				console.log('No se ha podido eliminar el contacto.');
			}
		}
		
		$scope.editar = function(){
			$location.path('/' + $routeParams.id + '/editar');
		};
	}])