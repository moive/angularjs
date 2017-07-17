angular.module('miApp')
.controller('FiltroCtrl', ['$scope', '$filter', function($scope, $filter){
	var costo =  1453.50;
	
	$scope.costo = $filter('currency')(costo);
	$scope.costoEuro = $filter('currency')(costo, '€', 3);
	
	 $scope.arreglo = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
	$scope.texto = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Do lorum maxime eum perspiciatis hic corporis sapiente. Ab, provident modi deleniti assumenda nobis ratione, accusantium porro, necessitatibus similique beatae dol oremque perferendis tempora!'; 
}]);