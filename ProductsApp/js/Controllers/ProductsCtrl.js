angular.module('myApp')
	.controller('ProductsCtrl', ['$scope', '$route', '$routeParams', 'products', 'organize', function($scope, $route, $routeParams, products, organize){
		
		$scope.order = $routeParams.order || '-precio';
		$scope.products = products.list();
		$scope.organize = organize.list();
		
		$scope.changeOrder = function(){
			$route.updateParams({order: $scope.order});
		};
	}]);