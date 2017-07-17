angular.module('miApp')
.controller('FiltroCtrl', ['$scope', '$filter', function($scope, $filter){
	var costo =  1453.50;
	
	$scope.costo = $filter('currency')(costo);
	$scope.costoEuro = $filter('currency')(costo, '€', 3);
	
}]);