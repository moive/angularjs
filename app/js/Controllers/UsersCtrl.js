angular.module("miApp")
.controller('UsersCtrl',['$scope', '$log', '$http', function($scope, $log, $http){
	$http.get('./json/usuarios.json').then(function(response){
		$scope.usuarios = response.data;
	}, function(error){
		$log.log(response.statusText);
	});
}]);