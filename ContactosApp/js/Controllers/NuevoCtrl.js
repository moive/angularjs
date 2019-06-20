angular.module('myApp')
	.controller('NuevoCtrl',['$scope','contactos','$location', function($scope,contactos,$location){
		var contacto = $scope.contacto = {};
		$scope.crear = function(){
			console.log(contacto)
			debugger;
			if(contactos.crear(contacto)){
				$location.path('/');
			}else{
				console.log('No se  ha podido crear el contacto.');
			}
		};
	}]);