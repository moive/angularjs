angular.module('ContactosApp')
.config(['$routeProvider', function($routeProvider){
	var vista = function(vista){
		return '_vistas/' + vista.split('.').join('/') + '.html';
	};
	
	$routeProvider
		.when('/', {
			templateUrl: vista('lista'),
			controller: 'ListaCtrl'
		})
		.otherwise({redirectTo: '/'});
}]);