angular.module("miApp")
.controller('UsersCtrl',['$scope', '$log', '$http', function($scope, $log, $http){
	var usuarios = $http({
		method: 'GET',
		url: '../../json/usuarios.json'
	}).then(function(response, status){
		$scope.usuarios = response.data;
		$log.log(response);
	}, function(response){
		$log.log(response.statusText);
	})
}]);