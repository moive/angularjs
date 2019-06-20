angular.module('myApp')
	.config(['$routeProvider', '$locationProvider',  function($routeProvider, $locationProvider){
		var vista = function(vista){
			return '_vistas/' + vista.split('.').join('/') + '.html';
		};
		$routeProvider
			.otherwise({redirectTo: '/'})
			.when('/nuevo',{
				templateUrl: vista('nuevo'),
				controller: 'NuevoCtrl'
			})
			.when('/', {
				templateUrl: vista('lista'),
				controller: 'ListaCtrl',
				notes:'This is a note...!'
			})
			.when('/:id',{
				templateUrl: vista('ver'),
				controller: 'VerCtrl'
			})
			.when('/:id/editar', {
				templateUrl: vista('editar'),
				controller: 'EditarCtrl'
			})
	}]);