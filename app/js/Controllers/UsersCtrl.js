angular.module("miApp")
.controller('UsersCtrl',['$scope', '$log', '$http', function($scope, $log, $http){
	$http.get('./json/usuarios.json').then(function(response){
		$scope.usuarios = response.data;
		$scope.count = response.data.length;
	}, function(error){
		$log.log(response.statusText);
	});
}]);