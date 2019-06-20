angular.module('myApp')
	.config(['$routeProvider', function($routerProvider){
		
		$routerProvider
			.otherwise({redirectTo: '/'})
			.when('/', {
				templateUrl: '_views/home.html',
				controller: 'HomeCtrl',
				title: 'Welcome to products'
			})
			.when('/products/:order?', {
				templateUrl: '_views/products.html',
				controller: 'ProductsCtrl',
				title:'Products'
			})
	}]);