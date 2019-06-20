angular.module('ContactosApp')
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	var vista = function(vista){
		return '_vistas/' + vista.split('.').join('/') + '.html';
	};
	
	$locationProvider.hashPrefix('');
	$routeProvider
		.when('/', {
			templateUrl: vista('lista'),
			controller: 'ListaCtrl'
		})
		.otherwise({redirectTo: '/'});
}]);